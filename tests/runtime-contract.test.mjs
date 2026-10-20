import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { assertContractMatches, verifyContractIntegrity } from '../scripts/sync-runtime-contract.mjs';
import { renderSubmission, generateSubmission } from '../scripts/generate-submission.mjs';
const root = resolve(import.meta.dirname, '..');
test('submission contains every runtime tool with the exact current annotations', () => {
  const contract = verifyContractIntegrity();
  const plugin = JSON.parse(readFileSync(resolve(root, 'plugin.json')));
  const output = renderSubmission(plugin, contract);
  assert.equal(Object.keys(output.tools).length, 29);
  for (const tool of contract.tools) assert.deepEqual(output.tools[tool.name].annotations, tool.annotations);
  for (const name of ['resolve_pin_thread', 'resolve_conversation', 'set_pin_statuses', 'confirm_bulk_resolve', 'send_thread_reply']) assert.equal(output.tools[name].annotations.destructiveHint, true);
  assert.equal(output.tools.get_project_installation.annotations.readOnlyHint, false);
  for (const entry of Object.values(output.tools)) {
    for (const key of ['read_only_justification', 'open_world_justification', 'destructive_justification']) assert.ok(entry.justifications[key].trim());
  }
  generateSubmission({ check: true });
});
test('contract drift is rejected, including one changed schema or annotation', () => {
  const bytes = readFileSync(resolve(root, 'contract/voicedot-mcp-contract.json'));
  assertContractMatches(bytes, Buffer.from(bytes));
  const changed = JSON.parse(bytes);
  changed.tools[0].annotations.readOnlyHint = !changed.tools[0].annotations.readOnlyHint;
  assert.throws(() => assertContractMatches(bytes, JSON.stringify(changed)), /Runtime contract drift/);
  const schema = JSON.parse(bytes); schema.tools[0].inputSchema.additionalProperties = 'changed';
  assert.throws(() => assertContractMatches(bytes, JSON.stringify(schema)), /Runtime contract drift/);
});
