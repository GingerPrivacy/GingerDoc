import { readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { toString } from 'mdast-util-to-string'
import GithubSlugger from 'github-slugger'

export const docsRoot = new URL('../src/content/docs/', import.meta.url)
export const copiesRoot = new URL('../src/locales/', import.meta.url)
export const localeCodes = readdirSync(copiesRoot).filter((name) => name.endsWith('.json') && name !== 'en.json').map((name) => name.slice(0, -5))

export function localizeHomeImport(body) {
  // A translated homepage lives one directory deeper than the English page.
  return body.replace(/^(\s*import ManualHome from ['"])\.\.\/\.\.\/components\/ManualHome\.astro(?=['"])/, '$1../../../components/ManualHome.astro')
}

export function pages(root, excluded = []) {
  const found = []
  function walk(directory) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      if (excluded.includes(entry.name)) continue
      const path = join(directory, entry.name)
      if (entry.isDirectory()) walk(path)
      else if (/\.mdx?$/.test(entry.name)) found.push(relative(root, path).replaceAll('\\', '/'))
    }
  }
  walk(root)
  return found.sort()
}

export function document(text) {
  text = text.replaceAll('\r\n', '\n')
  const frontmatter = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)
  if (!frontmatter) throw new Error('Missing frontmatter')
  const body = text.slice(frontmatter[0].length)
  const tree = fromMarkdown(body)
  const headings = []
  const code = []
  const links = []
  const slugger = new GithubSlugger()
  function visit(node) {
    if (node.type === 'heading') headings.push({ depth: node.depth, id: slugger.slug(toString(node)), offset: node.position.start.offset })
    if (node.type === 'code') code.push({ lang: node.lang, value: node.value })
    if (node.type === 'link' || node.type === 'definition' || node.type === 'image') links.push(node.url)
    for (const child of node.children ?? []) visit(child)
  }
  visit(tree)
  const metadata = (key) => frontmatter[1].match(new RegExp(`^${key}:\\s*(.*?)\\s*$`, 'm'))?.[1].replace(/^['"]|['"]$/g, '')
  const numericText = toString(tree, { includeHtml: false }).replace(/(?<=\d)[\u202f\u00a0](?=\d)/g, ',')
  const numbers = new Set(numericText.match(/(?<![\p{L}\p{N}.,])\d+(?:[.,]\d+)*(?![\p{L}\p{N}]|[.,]\d)/gu) ?? [])
  return { frontmatter: frontmatter[0], body, headings, code, links, metadata, numbers }
}

export function route(file) {
  return '/' + file.replace(/(?:^|\/)index\.mdx?$/, '').replace(/\.mdx?$/, '').replace(/\/$/, '')
}

export function localizeHref(href, locale, englishPages) {
  const routes = new Set(englishPages.map(route))
  routes.add('/why-ginger/difference')
  if (!href.startsWith('/') || href.startsWith('//')) return href
  const path = href.slice(1)
  const [pathname] = path.split(/[?#]/)
  const normalized = '/' + pathname.replace(/\/$/, '')
  if (!routes.has(normalized)) return href
  const target = normalized === '/why-ginger/difference' ? path.replace('why-ginger/difference', 'why-ginger') : path
  return `/${locale}/${target}`
}

export function localizeLinks(text, locale, englishPages) {
  const changes = []
  function visit(node) {
    const start = node.position?.start.offset
    const end = node.position?.end.offset
    let translated
    if (node.type === 'link' || node.type === 'definition' || node.type === 'image') {
      translated = text.slice(start, end).replace(/(\]\(\s*<?|\]:\s*<?)(\/[^\s)>"']*)/g,
        (match, before, href) => before + localizeHref(href, locale, englishPages))
    } else if (node.type === 'html' || (node.type === 'text' && /^\s*<[A-Z]\w*\b/.test(text.slice(start, end)))) {
      // MDX homepage props and HTML hrefs are not Markdown link nodes.
      translated = text.slice(start, end).replace(/(\bhref\s*[:=]\s*['"])(\/[^'"]*)/g,
        (match, before, href) => before + localizeHref(href, locale, englishPages))
    }
    if (translated !== undefined && translated !== text.slice(start, end)) {
      changes.push({ start, end, translated })
      return
    }
    // Code and inline code have no child link nodes and remain untouched.
    for (const child of node.children ?? []) visit(child)
  }
  visit(fromMarkdown(text))
  for (const change of changes.sort((a, b) => b.start - a.start)) {
    text = text.slice(0, change.start) + change.translated + text.slice(change.end)
  }
  return text
}

export function formatTranslatedAmounts(text, sourceNumbers) {
  const changes = []
  function visit(node) {
    if (node.type === 'text') {
      const start = node.position.start.offset
      const end = node.position.end.offset
      const original = text.slice(start, end)
      const translated = original.replace(/(?<![\p{L}\p{N}.,])\d{1,3}(?:,\d{3})+(?:\.\d+)?(?![\p{L}\p{N}]|[.,]\d)/gu,
        (number) => sourceNumbers.has(number) ? number.replaceAll(',', '\u202f') : number)
      if (translated !== original) changes.push({ start, end, translated })
    }
    for (const child of node.children ?? []) visit(child)
  }
  visit(fromMarkdown(text))
  for (const change of changes.sort((a, b) => b.start - a.start)) {
    text = text.slice(0, change.start) + change.translated + text.slice(change.end)
  }
  return text
}

export function readCopy(locale) {
  return JSON.parse(readFileSync(new URL(`${locale}.json`, copiesRoot), 'utf8'))
}
