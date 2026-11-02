# Anthropic directory preparation — 0.4.1

Prepared on 1 November 2026. **Not submitted, not approved, not published.**
This is a preparation checklist, not a claim of portal acceptance. The sibling
`anthropic.json` is an internal map, not an Anthropic import format.

## Source for the plugin bundle

| Portal field | Prepared value |
| --- | --- |
| Repository | `https://github.com/voicedot/voicedot-agent-plugin` |
| Plugin path | `adapters/claude-code` |
| Tracked branch | `release` (must be published before portal validation) |
| Stable identifier | `voicedot` |
| Display name | Voicedot |
| Version | 0.4.1 |
| Author | Good Sheet Sp z o.o. |
| Website | https://voicedot.ai/en |
| Documentation | https://voicedot.ai/en/docs/mcp |
| Privacy | https://voicedot.ai/en/privacy |
| Support | https://voicedot.ai/en/support |
| Terms | https://voicedot.ai/en/terms |
| MCP | `https://mcp.voicedot.ai/mcp` with individual OAuth consent |

The directory takes source from GitHub, not this diagnostic ZIP upload. The
standalone ZIP at `dist/voicedot-claude-code-0.4.1.zip` is for inspection and local
loading. It places `.claude-plugin/plugin.json` at its root and contains only the
adapter subtree. The root portable package and OpenAI compatibility files are
not the Claude submission folder.

## Boundary with OpenAI

OpenAI 0.4.0 was submitted separately on 1 November 2026. Its immutable package
source is commit `b6cc83b`; its submission report is
[here](../reports/2026-11-01-openai-0.4.0.md).
Version 0.4.1 changes packaging and preparation documents only. No production MCP
schema, tool name, title, description, endpoint, grant, OAuth setting or canonical
skill behavior is changed. Do not upload 0.4.1 to the existing OpenAI review.

## Order of work

1. Generate the Claude adapter, build its ZIP, run repository tests and run the
   official CLI validator with the directory profile. Preserve exact hashes.
2. Test the actual skill and OAuth in Claude Code and Claude.ai. Follow
   [the test plan](TEST-PLAN.md); local package validation is not that evidence.
3. Obtain the owner's explicit go for publishing the source branch and tag.
   Publish `release` only after checking that no other release writer changed it.
   Never force-push a release branch or move a version tag.
4. Confirm the Claude account/organization that should own the listing long term,
   and connect a GitHub account that can push to this repository. Pro, Max and
   Ultra individual accounts need no additional organization role. The first
   submitting organization owns the repository-folder listing.
5. In https://claude.ai/directory/manage choose **Submit new → Plugin bundle**,
   enter the values above and Validate. Revalidate if the tracked commit changes.
   Verify the listing from the generated manifest and README. Review the
   [data-handling draft](DATA-HANDLING.md) against the actual questions.
6. The owner confirms the contact address and all four legal acknowledgments.
   Final submission requires separate explicit authorization. No credentials
   belong in the repository or its ZIP. Publish after acceptance is another step.
7. Prefer scheduled checks until the owner chooses webhook updates. A webhook
   additionally requires GitHub repository admin access. Automatic publication
   should remain off until the owner deliberately enables it.

## Separate remote connector

Anthropic says to submit a first-party remote server as an **MCP connector** as
well, normally before the plugin bundle. A custom connector used for testing is
not a directory submission. The plugin and connector should use the identical
MCP URL and the same owning organization, which permits pairing the listings.

Prepare the connector in parallel on paper, but defer production tool-title and
server-name changes until the owner schedules them after the OpenAI decision.
Do not claim that a plugin bundle replaces this connector requirement. Every tool
needs a title and applicable annotations; inspect the current server rather than
assuming this is already implemented. Test all tools before connector submission.
Provide a populated dedicated Anthropic reviewer account through private portal
fields, not a shared password in this repository. Creating or configuring that
account is a separate production action, not part of this local packaging task.

## Official references checked on 1 November 2026

- [Directory plans, ownership and the two submission kinds](https://claude.com/docs/directory/publish)
- [Plugin submission, tracked source and update choices](https://claude.com/docs/plugins/submit)
- [Pre-submission checks: README, license and self-contained folder](https://claude.com/docs/plugins/pre-submission-checklist)
- [Manifest fields and stable names](https://code.claude.com/docs/en/plugins/manifest-reference)
- [Publishing and client loading](https://code.claude.com/docs/en/plugins/publish)
- [Connector submission](https://claude.com/docs/connectors/building/submission)

The local CLI has newer directory-profile checks than some prose in the docs.
Keep its version and actual result in the evidence receipt. Neither a successful
local validator nor an existing ChatGPT test proves Anthropic approval.
