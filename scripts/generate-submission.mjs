import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { verifyContractIntegrity } from './sync-runtime-contract.mjs';

const root = resolve(import.meta.dirname, '..');
export function renderSubmission(plugin, contract) {
  const { interface: listing, review } = plugin.extensions['com.openai'];
  return {
    $schema: 'https://developers.openai.com/plugins/schemas/chatgpt-app-submission.v1.json',
    schema_version: 1,
    app_info: { display_name: listing.displayName, subtitle: listing.shortDescription, description: listing.longDescription, category: 'PRODUCTIVITY' },
    // The current guidelines omit mandatory justifications, but the published v1 JSON import schema still requires them.
    // Keep this legacy-import compatibility derived from the same current contract; the ZIP manifest does not need it.
    tools: Object.fromEntries(contract.tools.map(({ name, annotations, description }) => [name, {
      annotations,
      justifications: {
        read_only_justification: `${annotations.readOnlyHint ? 'Retrieves authorized data without changing server state.' : 'Creates or changes server state.'} ${description}`,
        open_world_justification: `${annotations.openWorldHint ? 'The server declares an open-world operation.' : 'The operation is bounded to the authorized Voicedot workspace and projects.'} ${description}`,
        destructive_justification: `${annotations.destructiveHint ? 'Changes existing user-visible state or sends a message; the server marks the action destructive.' : 'The server declares no destructive change to existing user data.'} ${description}`,
      },
    }])),
    test_cases: review.test_cases.positive.map(({ description, prompt, tools_triggered, expected_behavior }) => ({ description, user_prompt: prompt, tools_triggered, expected_output: expected_behavior })),
    negative_test_cases: review.test_cases.negative.map(({ description, prompt }) => ({ description, user_prompt: prompt })),
  };
}
export function generateSubmission({ check = false } = {}) {
  const contract = verifyContractIntegrity();
  const plugin = JSON.parse(readFileSync(resolve(root, 'plugin.json'), 'utf8'));
  const target = resolve(root, 'chatgpt-app-submission.json');
  const contents = `${JSON.stringify(renderSubmission(plugin, contract), null, 2)}\n`;
  if (check) {
    if (readFileSync(target, 'utf8') !== contents) throw new Error('Submission import is stale; run npm run generate.');
  } else writeFileSync(target, contents);
  return contents;
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) generateSubmission({ check: process.argv.includes('--check') });
