import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve(import.meta.dirname, '..');
const contractFile = resolve(root, 'contract/voicedot-mcp-contract.json');
const sourceFile = resolve(root, 'contract/source.json');
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');
export function assertContractMatches(expected, actual) {
  if (!Buffer.from(expected).equals(Buffer.from(actual))) throw new Error('Runtime contract drift: refresh the package from the intended runtime commit, then regenerate and review.');
}
export function snapshotFiles(contract) {
  return [{ path: 'integrations/mcp/agent-guide.md', ...contract.guide }, ...contract.knowledge.files];
}
export function snapshotPath(path) {
  if (!path.startsWith('integrations/mcp/') || path.includes('..')) throw new Error('Invalid published snapshot path.');
  return `contract/${path.slice('integrations/mcp/'.length)}`;
}
export function verifyContractIntegrity() {
  const bytes = readFileSync(contractFile);
  const source = JSON.parse(readFileSync(sourceFile, 'utf8'));
  const contract = JSON.parse(bytes);
  if (hash(bytes) !== source.sha256 || JSON.stringify(contract.guide) !== JSON.stringify(source.guide) || JSON.stringify(contract.knowledge) !== JSON.stringify(source.knowledge)) throw new Error('Contract mirror or provenance digest is stale.');
  if (contract.tools.length !== 29 || new Set(contract.tools.map(t => t.name)).size !== 29) throw new Error('Expected the reviewed 29-tool contract.');
  for (const tool of contract.tools) for (const flag of ['readOnlyHint', 'destructiveHint', 'openWorldHint']) {
    if (typeof tool.annotations[flag] !== 'boolean') throw new Error(`Missing annotation: ${tool.name}.${flag}`);
  }
  for (const file of snapshotFiles(contract)) {
    const bytes = readFileSync(resolve(root, snapshotPath(file.path)));
    if (bytes.length !== file.bytes || hash(bytes) !== file.sha256) throw new Error(`Published snapshot differs: ${file.path}`);
  }
  return contract;
}
export function syncRuntimeContract({ runtime = resolve(root, '..', 'voicedot'), ref = 'origin/main', check = false } = {}) {
  const source = JSON.parse(readFileSync(sourceFile, 'utf8'));
  const commit = execFileSync('git', ['rev-parse', ref], { cwd: runtime, encoding: 'utf8' }).trim();
  const bytes = execFileSync('git', ['show', `${commit}:${source.path}`], { cwd: runtime });
  const contract = JSON.parse(bytes);
  for (const file of snapshotFiles(contract)) {
    const content = execFileSync('git', ['show', `${commit}:${file.path}`], { cwd: runtime });
    if (content.length !== file.bytes || hash(content) !== file.sha256) throw new Error(`Runtime snapshot metadata differs: ${file.path}`);
    const target = resolve(root, snapshotPath(file.path));
    if (check) assertContractMatches(content, readFileSync(target));
    else { mkdirSync(dirname(target), { recursive: true }); writeFileSync(target, content); }
  }
  if (check) assertContractMatches(bytes, readFileSync(contractFile));
  else {
    const contract = JSON.parse(bytes);
    writeFileSync(contractFile, bytes);
    writeFileSync(sourceFile, `${JSON.stringify({ ...source, commit, sha256: hash(bytes), guide: contract.guide, knowledge: contract.knowledge }, null, 2)}\n`);
  }
  verifyContractIntegrity();
  console.log(`Runtime contract matches ${commit}; published knowledge metadata matches the mirror.`);
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const args = process.argv.slice(2);
  const value = (key) => args.includes(key) ? args[args.indexOf(key) + 1] : undefined;
  if (args.includes('--integrity')) verifyContractIntegrity();
  else syncRuntimeContract({ runtime: value('--runtime'), ref: value('--ref'), check: args.includes('--check') });
}
