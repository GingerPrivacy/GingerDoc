import { readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { toString } from 'mdast-util-to-string'
import GithubSlugger from 'github-slugger'

export const docsRoot = new URL('../src/content/docs/', import.meta.url)
export const copiesRoot = new URL('../src/locales/', import.meta.url)
export const localeCodes = readdirSync(copiesRoot).filter((name) => name.endsWith('.json') && name !== 'en.json').map((name) => name.slice(0, -5))

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
  const numbers = new Set(toString(tree, { includeHtml: false }).match(/(?<![\p{L}\p{N}.,])\d+(?:[.,]\d+)*(?![\p{L}\p{N}]|[.,]\d)/gu) ?? [])
  return { frontmatter: frontmatter[0], body, headings, code, links, metadata, numbers }
}

export function route(file) {
  return '/' + file.replace(/(?:^|\/)index\.mdx?$/, '').replace(/\.mdx?$/, '').replace(/\/$/, '')
}

export function localizeLinks(text, locale, englishPages) {
  const routes = new Set(englishPages.map(route))
  routes.add('/why-ginger/difference')
  return text.replace(/([('"\s])\/(?![/>])([^\s)'"<>]*)/g, (match, before, path) => {
    const [pathname] = path.split(/[?#]/)
    const normalized = '/' + pathname.replace(/\/$/, '')
    if (!routes.has(normalized)) return match
    const target = normalized === '/why-ginger/difference' ? path.replace('why-ginger/difference', 'why-ginger') : path
    return `${before}/${locale}/${target}`
  })
}

export function readCopy(locale) {
  return JSON.parse(readFileSync(new URL(`${locale}.json`, copiesRoot), 'utf8'))
}
