import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import test from 'node:test';
import { generatedAdapter } from '../scripts/generate-claude-adapter.mjs';
import { buildClaudePackage } from '../scripts/package-claude.mjs';

const root = resolve(import.meta.dirname, '..');

test('Claude package is self-contained with disclosure, license and listing assets', () => {
  const { files } = generatedAdapter();
  const manifest = JSON.parse(files.get('.claude-plugin/plugin.json'));
  assert.equal(manifest.name, 'voicedot');
  assert.equal(manifest.displayName, 'Voicedot');
  assert.equal(manifest.license, 'MIT');
  assert.equal(manifest.repository, 'https://github.com/voicedot/voicedot-agent-plugin');
  assert.equal(files.get('LICENSE'), readFileSync(resolve(root, 'LICENSE'), 'utf8'));
  assert.deepEqual(files.get('assets/icon.png'), readFileSync(resolve(root, 'assets/icon.png')));
  for (const key of ['homepage', 'documentationUrl', 'supportUrl', 'privacyPolicyUrl', 'termsOfServiceUrl']) {
    assert.equal(new URL(manifest[key]).protocol, 'https:');
  }
  const readme = files.get('README.md');
  assert.ok(readme.replace(/```[\s\S]*?```/g, '').split(/\s+/).length >= 40);
  assert.match(readme, /https:\/\/mcp\.voicedot\.ai\/mcp/);
  assert.match(readme, /OAuth\s+authorization/);
  assert.match(readme, /does not download or execute that client on installation/);
  assert.doesNotMatch(readme, /\{\{[A-Z_]+\}\}/);
  assert.deepEqual(JSON.parse(files.get('.mcp.json')), {
    mcpServers: { voicedot: { type: 'http', url: 'https://mcp.voicedot.ai/mcp' } },
  });
});

test('standalone Claude archive has only the plugin subtree and deterministic bytes', () => {
  const first = buildClaudePackage();
  const second = buildClaudePackage();
  assert.deepEqual(first, second);
  assert.ok(first.inventory.some(({ path }) => path === '.claude-plugin/plugin.json'));
  assert.ok(first.inventory.some(({ path }) => path === 'README.md'));
  assert.ok(first.inventory.every(({ path }) => !path.startsWith('adapters/') && !path.startsWith('../')));
  assert.ok(first.inventory.every(({ path }) => !['plugin.json', 'package.json', 'package-lock.json'].includes(path)));
  for (const { path } of first.inventory) {
    assert.ok(['README.md', 'LICENSE', '.mcp.json', '.claude-plugin/plugin.json', 'assets/icon.png'].includes(path)
      || path.startsWith('skills/review-voicedot-feedback/'));
  }
});
