# Local preparation receipt — 1 November 2026

This receipt covers local package preparation, not Anthropic approval.

- Source base: the OpenAI snapshot report commit `bcb1dbf`.
- Frozen OpenAI package source: annotated local tag `v0.4.0` targets
  `b6cc83b`; use Git to resolve the full source revision.
- Canonical source and Claude adapter version: 0.4.1.
- Claude Code validator: 2.1.316, `--strict --profile directory`.
- Validation: passed, no blocking finding or warning. One informational advice
  recommends an install command from a marketplace; no such command is advertised
  until that distribution path actually exists.
- Repository tests: 18 passed, 0 failed. An initial documentation test did not
  allow a line break between two words; the whitespace matcher was corrected
  and the complete tests rerun successfully.
- Generation, public-boundary validation, both package reproducibility checks
  and the internal submission-template validation: passed.
- Standalone Claude ZIP: `voicedot-claude-code-0.4.1.zip`, 41,868 bytes.
- ZIP SHA-256: `a1965785d3928f131bd810d1003850867a48f5a04ade97d469edc58719faa453`.
- Eight regular files: manifest, remote MCP declaration, README, license, icon,
  skill and its two references. No package manager, local executable or hook.
- Canonical skill, MCP declaration and the runtime contract are unchanged from
  the OpenAI snapshot. The copied contract contains 29 tools, without tool titles;
  the separate connector's title requirement remains a later runtime task.

The owner browser reached the current directory portal, which showed zero
submissions, and the source form matched the documented five-step bundle flow.
No repository was entered, no Validate or Save action was performed, no legal
checkbox was selected and nothing was sent. The browser's own connectors list
had no Voicedot connection. The existing CLI is signed in but had no Voicedot
plugin installed; that is not evidence of successful Voicedot OAuth.

## Pending

- Explicit authorization to publish the prepared Git refs to GitHub.
- Dedicated Anthropic reviewer data/access and authorization for the actual
  Claude connection, followed by authenticated client tests.
- Bundle-skill tests in each intended surface, including Cowork, and a comparison
  against the same prompt without the skill.
- Portal Validate against the published exact commit, name availability, security
  scan, data-handling review, contact details and legal acknowledgments.
- Separate connector submission with its complete requirements, scheduled so
  production tool changes do not disturb the current OpenAI review.
- Explicit final submission, and a later publication decision.

No Docker stack, test database, local web server or recording was allocated for
this packaging change. The source worktree remains needed until its unpublished
changes have been delivered. No production service or OpenAI draft was edited.
