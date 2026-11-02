# Marketplace submission materials

Anthropic 0.4.1 local preparation is tracked in [its checklist](anthropic/README.md);
that work has not been submitted.

**OpenAI status on 2026-11-01: submitted to OpenAI, In review, not published.**
The verified package snapshot, hashes, final website link and test limitations
are recorded in [the submission report](reports/2026-11-01-openai-0.4.0.md).
The publisher cancelled the first review to use the product homepage, uploaded
the corrected ZIP and submitted again. Keep the active review and its frozen
artifact intact.

The preparation notes below originated on 2026-10-20. They describe the workflow
and earlier gates, not the current portal status. JSON preflight cards are
preparation/provenance checks; they do not query the live submission.

- `plugin.json`: listing, three starter prompts, five positive and three negative cases, all available countries and no commerce.
- `chatgpt-app-submission.json`: generated form import with exact annotations for all 29 tools.
- `contract/`: byte-verified runtime contract, published guide and knowledge 2026-10-20.1, plus source commit and digests.
- `dist/voicedot-agent-plugin-0.4.0.zip`: deterministic upload candidate, inventory and SHA-256 digest beside it.
- `assets/icon.png`: existing square brand PNG.
- `recording-plan.md`: actual ChatGPT rehearsal plan, not a recording.

Use the existing Voicedot plugin identity and the publisher Good Sheet Sp z o.o.
Do not create a duplicate. The old 0.1.1 portal entry was historical and is not
the active 0.4.0 submission. Preserve the configured remote MCP connection;
follow the current portal lifecycle before any later update.

## Required gates

Run generation, contract, tests, validation and deterministic package checks. `contract:check` compares the runtime sibling's current `origin/main`, not only the pinned historical source. Fetch the runtime repository separately when checking a newer remote revision. Offline tests verify every copied file's digest. Neither proves actual ChatGPT behavior.

Complete the dedicated ordinary demo account with Harbor Notes (Private) and Fieldwork Notes (Team), sample messages, replies, a closed Help conversation, a team handover and Homepage fixes review round. Use the current runbook supplied by the product owner. Do not insert artificial customer messages through a database seed. The person records the voice example and marks Checked.

Run the exact eight cases in ChatGPT web. Separately prove the reply preview, explicit confirmation and same-token retry without a duplicate message. Run cases one and three in the actual ChatGPT iOS/Android app; a narrow browser viewport is only responsive-web evidence.

Verify the public listing content, all required user agents, OAuth metadata, exact domain token and saved portal scans. Piotr enters reviewer credentials only in the protected portal fields and completes legal attestations. The video URL must play without a login. Screenshots are acceptance evidence; current OpenAI guidance says starter prompts replace screenshots in the Directory.

Freeze final source/version/hash after the video and remaining metadata are complete. No actual submission occurs before Piotr explicitly says “wyślij”. Publishing after review is a separate authorized action.

Official requirements: [submission](https://developers.openai.com/plugins/deploy/submission), [guidelines](https://developers.openai.com/plugins/plugin-guidelines), [ChatGPT connection](https://developers.openai.com/plugins/deploy/connect-chatgpt).
