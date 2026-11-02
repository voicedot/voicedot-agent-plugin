import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { generateClaudeAdapter } from './generate-claude-adapter.mjs';
import { serializeStableZip } from './package.mjs';
import { assertPublicText } from './validate-package.mjs';

const root = resolve(import.meta.dirname, '..');

export function buildClaudePackage() {
  const { files } = generateClaudeAdapter({ check: true });
  const entries = [...files].sort(([a], [b]) => a.localeCompare(b))
    .map(([path, content]) => ({ path, payload: Buffer.from(content) }));
  for (const { path, payload } of entries) {
    if (!path.startsWith('assets/')) assertPublicText(payload, `adapters/claude-code/${path}`);
  }
  const manifest = JSON.parse(files.get('.claude-plugin/plugin.json'));
  const name = `voicedot-claude-code-${manifest.version}`;
  const archive = serializeStableZip(entries);
  const sha256 = createHash('sha256').update(archive).digest('hex');
  const inventory = entries.map(({ path, payload }) => ({
    path, bytes: payload.length, sha256: createHash('sha256').update(payload).digest('hex'),
  }));
  return { name, archive, sha256, inventory };
}

export function packageClaude({ check = false } = {}) {
  const output = buildClaudePackage();
  const dist = resolve(root, 'dist');
  const artifacts = new Map([
    [`${output.name}.zip`, output.archive],
    [`${output.name}.zip.sha256`, Buffer.from(`${output.sha256}  ${output.name}.zip\n`)],
    [`${output.name}.files.json`, Buffer.from(`${JSON.stringify({ package: output.name, files: output.inventory }, null, 2)}\n`)],
  ]);
  if (!check) mkdirSync(dist, { recursive: true });
  for (const [name, content] of artifacts) {
    const target = resolve(dist, name);
    if (check) {
      if (!readFileSync(target).equals(content)) throw new Error(`Claude artifact is stale: ${name}`);
    } else writeFileSync(target, content);
  }
  console.log(`Claude package ${output.name}: ${output.archive.length} bytes, SHA256 ${output.sha256}`);
  return output;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  packageClaude({ check: process.argv.includes('--check') });
}
