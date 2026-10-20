# Voicedot Agent Plugin

Portable plugin metadata and a canonical skill for authorized website feedback, installation, team handovers and human review rounds. The one MCP connection is `https://mcp.voicedot.ai/mcp`, using the production OAuth flow. Read access and optional setup, resolve, reply and review permissions are separate. Control them under **AI agents → Manage access**.

## Installation and account setup

For an existing owned workspace, use `create_project` or `add_project_address` when explicitly requested and permitted. `get_project_installation` opens a verification window and returns the snippet. The coding agent installs it with its own authorized repository tools, opens the exact HTTPS address and verifies a fresh backend ping using `get_project_installation_status`. Human first feedback still completes the installation experience.

New accounts use the separate official CLI v2 flow documented at [Agent setup](https://voicedot.ai/en/docs/agents) and [Authentication](https://voicedot.ai/auth.md). MCP does not register accounts. Identity verification and human handoff are preserved; no purchase or plan change is performed by this plugin.

## Plugin identity

The existing OpenAI plugin requires the internal package name `app-6a89786fda048191a6f634164f699c88`. The visible listing name is Voicedot and the MCP server key is `voicedot`. Keep this internal name when updating the same plugin; the portal rejects a different one. Generated client adapters inherit the canonical package name.

## Source of truth

Hand-edit root `plugin.json`, root `mcp.json`, and the canonical skill tree. `npm run generate` projects the OpenAI/Codex compatibility files, Claude adapter and submission JSON. Do not hand-edit these generated files.

`contract/` contains the exact runtime contract plus commit and hash provenance. It is reference data, not private server implementation. `npm run contract:check` compares it against the sibling runtime repository's current `origin/main`; use `-- --ref <commit>` for a specific release. Fetch that repository separately before checking a newer remote revision. `npm run contract:sync` deliberately refreshes the mirror, after which review the diff and regenerate. Local integrity tests detect mirror/provenance changes even without that sibling checkout.

## Verification

```sh
npm ci
npm run contract:check
npm run generate:check
npm test
npm run validate
npm run package
npm run package:check
npm run submission:template-check
```

Deterministic ZIP and tar archives, file inventory and SHA-256 digests are in `dist/`. The generated Claude adapter uses the same remote endpoint; no Claude marketplace listing or authenticated client acceptance is implied.

Version 0.4.0 is a submission candidate. A package build does not establish working reviewer access, ChatGPT desktop/mobile acceptance, an accessible demo video, portal scans or domain verification. Those checks and the owner's attestations precede submission. Nothing is sent for review without the owner's explicit instruction.
