# Claude acceptance test plan

Status: prepared, authenticated runs pending. Keep results separate for
Claude.ai custom connector, Claude Code plugin load and directory installation.
Tests run in another host do not prove this host works.

## Local package checks

```sh
npm run generate:check
npm run package
npm run package:claude
npm test
npm run validate:claude
npm run package:check
npm run package:claude:check
npm run submission:template-check
```

`validate:claude` uses the official Claude CLI with `--strict --profile directory`.
The profile covers a subset of directory checks, not the portal safety scan.
A note about a missing marketplace install line is informational while no listing
exists; do not invent a working directory or marketplace installation command.

## Claude.ai — custom connector

1. Confirm which Claude account/organization will own the listing.
2. Inspect existing connectors before creating a duplicate. If no appropriate
   connection exists, add a custom connector pointing at
   `https://mcp.voicedot.ai/mcp`. Sign in to the dedicated demo account and approve
   exactly the intended projects and permissions using the normal consent flow.
   Do not reuse a personal production workspace as review data by accident.
3. In a fresh conversation enable Voicedot. Run these prompts in order:
   - “Which Voicedot projects do I have?”
   - “What feedback is still open on Harbor Notes?”
   - “What did my team hand over to you in Fieldwork Notes?”
4. Expect only Harbor Notes and Fieldwork Notes. Exclude the resolved Help thread,
   retaining unresolved siblings. Fieldwork must expose only the handed-over work.
5. Ask “Delete the comment about the Help link.” Expect an unsupported-operation
   explanation, without closure or deletion as a substitute.
6. Ask “Show me the feedback of another company's Voicedot project.” Expect a
   refusal without unrelated project content.

## Claude Code — packaged skill and connection

Load the adapter from a fresh session:

```sh
claude --plugin-dir ./adapters/claude-code
```

Confirm the plugin skill and remote server actually load; authenticate through
Claude Code's normal MCP interface. A valid manifest or a 401 endpoint is not
proof of a working OAuth session. Repeat the read and refusal prompts above.
Request a reply preview on a deliberately chosen demo thread, inspect its target,
content and visible reference, then stop unless the owner authorizes the exact
write. With authorization, confirm in the next turn and retry the same preview
once; verify exactly one reply, not two. Never accept consent on the owner's behalf
or mark Checked/Needs fix for them.

Do not grant general shell auto-approval or disable host protections to make a
setup test pass. For the optional CLI flow, use the host's ordinary approval
checkpoint if it flags external code or snippet integration.

## Claude chat and Cowork — bundle surface checks

A custom connector only proves MCP transport and sign-in in that client; it does
not prove that the bundle's skill loaded. Before directory publication, load the
actual bundle through the supported account/plugin test route in Claude chat and
Cowork as well as Claude Code, confirm the skill is present, and repeat the read
and refusal cases. Record each surface separately. Compare a representative
feedback prompt with and without the skill; preserve the difference rather than
asserting that the skill improves the result without evidence.

## After source publication and portal validation

Validate the published `release` commit for `adapters/claude-code` in the portal.
Record the SHA it validates, visible findings and actual owner account. After a
plugin listing is available, install that listing on each supported target surface
and repeat the smoke test. A local `--plugin-dir` session is not that installation.
The remote connector has a broader all-tool test requirement; use its separate
submission checklist rather than declaring it complete from these few prompts.

## Evidence to record

For each run preserve date, host/client version, package SHA, account type (no
credentials), connected projects, exact prompt, visible result and unchanged or
intended postcondition. Store private account identifiers and screenshots outside
this public repository. Record blockers honestly; never check a test off because
another host happened to pass.
