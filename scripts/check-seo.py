"""Validate search metadata and language discovery in the generated static site."""

import json
import sys
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
from urllib.robotparser import RobotFileParser

ROOT = Path(__file__).resolve().parents[1]
SITE = "https://docs.gingerwallet.io"
DIST = ROOT / "dist"
NS = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9", "x": "http://www.w3.org/1999/xhtml"}


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.meta = []
        self.links = []
        self.anchors = []
        self.titles = []
        self.h1_count = 0
        self.lang = None
        self.schema = []
        self.capture = None
        self.buffer = []
        self.charset_offset = text.lower().find('charset="utf-8"')
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "html":
            self.lang = attrs.get("lang")
        elif tag == "meta":
            self.meta.append(attrs)
        elif tag == "link":
            self.links.append(attrs)
        elif tag == "a":
            self.anchors.append(attrs)
        elif tag == "h1":
            self.h1_count += 1
        if tag == "title" or (tag == "script" and attrs.get("type") == "application/ld+json"):
            self.capture = tag
            self.buffer = []

    def handle_endtag(self, tag):
        if tag != self.capture:
            return
        text = "".join(self.buffer)
        if tag == "title":
            self.titles.append(text)
        else:
            self.schema.append(json.loads(text))
        self.capture = None

    def handle_data(self, text):
        if self.capture:
            self.buffer.append(text)

    def metadata(self, name):
        return [meta.get("content", "") for meta in self.meta if meta.get("name") == name]


def main():
    errors = []

    def check(condition, message):
        if not condition:
            errors.append(message)

    if not (DIST / "sitemap-index.xml").exists():
        print("Build the site before running this check.")
        return 1

    index = ET.parse(DIST / "sitemap-index.xml")
    entries = {}
    for location in index.findall("s:sitemap/s:loc", NS):
        check(location.text.startswith(SITE + "/"), f"Foreign sitemap: {location.text}")
        sitemap = ET.parse(DIST / urlparse(location.text).path.lstrip("/"))
        for entry in sitemap.findall("s:url", NS):
            url = entry.findtext("s:loc", namespaces=NS)
            check(url not in entries, f"Duplicate sitemap URL: {url}")
            entries[url] = entry

    pages = {}
    redirects = 0
    for path in DIST.rglob("*.html"):
        relative = path.relative_to(DIST).as_posix()
        page = Page(path.read_text(encoding="utf-8"))
        if relative == "404.html":
            check(any("noindex" in value for value in page.metadata("robots")), "404.html must be noindex")
            check(not any(link.get("hreflang") for link in page.links), "404.html advertises nonexistent translations")
            continue
        if any("noindex" in value for value in page.metadata("robots")):
            redirects += 1
            continue
        url = SITE + "/" + relative.removesuffix("index.html")
        pages[url] = page
        check(len(page.titles) == 1 and bool(page.titles[0].strip()), f"Missing or duplicate title: {relative}")
        check(len(page.metadata("description")) == 1 and bool(page.metadata("description")[0].strip()), f"Missing description: {relative}")
        check(page.h1_count == 1, f"Expected one main heading: {relative}")
        check(0 <= page.charset_offset < 1024, f"Late or missing UTF-8 declaration: {relative}")
        canonical = [link.get("href") for link in page.links if link.get("rel") == "canonical"]
        check(canonical == [url], f"Canonical does not match the page URL: {relative}")
        check(len(page.schema) == 1, f"Missing or duplicate structured data: {relative}")
        if page.schema:
            graph = page.schema[0].get("@graph", [])
            articles = [node for node in graph if node.get("@type") in ("WebPage", "TechArticle")]
            check(len(articles) == 1, f"Missing page entity: {relative}")
            if articles:
                article = articles[0]
                check(article.get("url") == url and article.get("inLanguage") == page.lang, f"Wrong structured URL/language: {relative}")
                check(article.get("description") in page.metadata("description"), f"Structured description differs from page: {relative}")

    check(set(entries) == set(pages), f"Sitemap coverage differs: missing={sorted(set(pages) - set(entries))}, extra={sorted(set(entries) - set(pages))}")
    for url, page in pages.items():
        alternates = {link.get("hreflang"): link.get("href") for link in page.links if link.get("rel") == "alternate"}
        check(alternates.get(page.lang) == url, f"Missing self hreflang: {url}")
        check("x-default" in alternates, f"Missing x-default: {url}")
        for lang, target in alternates.items():
            check(target in pages, f"Alternate page does not exist: {url} -> {target}")
            if lang == "x-default" or target not in pages:
                continue
            check(pages[target].lang == lang, f"Wrong alternate language: {target}")
            check(any(link.get("hreflang") == page.lang and link.get("href") == url for link in pages[target].links), f"Non-reciprocal hreflang: {url} -> {target}")
            check(any(anchor.get("hreflang") == lang and SITE + anchor.get("href", "") == target for anchor in page.anchors), f"Missing crawlable language link: {url} -> {target}")
        if url in entries:
            xml_alternates = {link.get("hreflang"): link.get("href") for link in entries[url].findall("x:link", NS)}
            check(xml_alternates == {lang: target for lang, target in alternates.items() if lang != "x-default"}, f"HTML and sitemap languages differ: {url}")

    robots = (DIST / "robots.txt").read_text(encoding="utf-8")
    check(f"Sitemap: {SITE}/sitemap-index.xml" in robots, "robots.txt does not advertise the sitemap")
    rules = RobotFileParser()
    rules.parse(robots.splitlines())
    for agent in ["Googlebot", "bingbot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "Claude-SearchBot"]:
        for path in ["/", "/payments/send/", "/hu/payments/send/"]:
            check(rules.can_fetch(agent, SITE + path), f"robots.txt blocks {agent} on {path}")
    for message in errors:
        print(message)
    print(f"Checked {len(pages)} indexable pages, {len(entries)} sitemap URLs and {redirects} noindex redirects; {len(errors)} failures.")
    return bool(errors)


if __name__ == "__main__":
    sys.exit(main())
