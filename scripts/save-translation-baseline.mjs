// Save a compact reference from a committed English revision before advancing it.
// Usage: node scripts/save-translation-baseline.mjs v2.0.26 HEAD
import { execFileSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { document, localeCodes } from './translation-utils.mjs'
import { baselineDirectory, snapshotDocument, validateBaseline } from './translation-baselines.mjs'

const [release, revision] = process.argv.slice(2)
if (!/^v\d+\.\d+\.\d+$/.test(release ?? '') || !revision) throw new Error('Provide a release and committed English revision')
const sourceCommit = execFileSync('git', ['rev-parse', '--verify', `${revision}^{commit}`], { encoding: 'utf8' }).trim()
const files = execFileSync('git', ['ls-tree', '-r', '--name-only', sourceCommit, 'src/content/docs/'], { encoding: 'utf8' })
  .trim().split('\n').map((file) => file.replace(/^src\/content\/docs\//, ''))
  .filter((file) => /\.mdx?$/.test(file) && !localeCodes.includes(file.split('/')[0]))
const references = {}
for (const file of files) {
  const source = document(execFileSync('git', ['show', `${sourceCommit}:src/content/docs/${file}`], { encoding: 'utf8' }))
  if (source.metadata('verified_release') === release) references[file] = snapshotDocument(source)
}
const baseline = validateBaseline({ schemaVersion: 1, release, sourceCommit, pages: references }, release)
mkdirSync(baselineDirectory, { recursive: true })
writeFileSync(new URL(`${release}.json`, baselineDirectory), JSON.stringify(baseline, null, 2) + '\n', { flag: 'wx' })
console.log(`Saved ${Object.keys(references).length} English ${release} references from ${sourceCommit}.`)
