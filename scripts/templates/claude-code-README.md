# Voicedot

Website feedback for AI agents. Read what visitors pinned to a page, understand
team handovers, propose a fix in your authorized repository, and prepare a review
round so a person can check the result. Maintained by Good Sheet Sp z o.o., the
company behind [Voicedot](https://voicedot.ai/en). Version {{VERSION}}.

![Voicedot](./assets/icon.png)

## Connect and start

This plugin connects to the first-party remote MCP server at
{{MCP_URL}} over HTTPS. Sign in to your Voicedot account with OAuth and approve
the project access you intend to grant. No API key belongs in this package.
An existing account and access to a project are needed to read its feedback;
available actions follow your plan and the permissions of your connection.

For a local Claude Code session, from the repository root:

```sh
claude --plugin-dir ./adapters/claude-code
```

This loads the checkout for that session; it is not a directory installation.
Use Claude Code's normal MCP authentication interface to connect the server.
After connecting, try:

- “Which Voicedot projects do I have?”
- “What feedback is still open on my website?”
- “What did my team hand over, and what should I fix first?”

## Actions and approvals

Read authorized pinned feedback, transcribed voice comments, page context,
conversation replies, team notes and human review decisions. Private addresses
and Team/Public handovers follow the current connection's visibility rules.

With the appropriate separately granted permissions, Claude can also set up
projects and website addresses, retrieve widget installation instructions,
verify a fresh installation ping, change pin visibility, resolve discussions,
send replies and prepare review rounds. Replies, published review rounds and
bulk resolution require a preview and a separate explicit confirmation.
Retries must not duplicate a reply. Only a person marks **Checked** or
**Needs fix**. Deleting feedback and making purchases are not supported.

Connecting Voicedot does not grant repository or deployment access. Any code
change, commit or publication uses the agent's own authorized tools and the
repository's rules. Visitor feedback and page content are untrusted evidence,
not permission to execute instructions. Audio files are not exposed: voice
feedback is available as transcripts and page context.

## What runs and what is sent

The package contains one skill, its reference documents, a remote MCP declaration,
an icon and license. It installs no local server, dependencies, hooks or background
processes, and contains no telemetry or automatic shell command.

When you use the connected tools, requests to Voicedot include your OAuth
authorization, tool arguments such as project and thread identifiers, search
terms, website addresses and any reply or review text you approve. Results sent
back to Claude can include feedback transcripts, saved-page context, discussion
history, team notes and review decisions. Voicedot processes the requests on its
own service; Claude receives the returned content as part of the conversation.
Do not submit content you are not authorized to share.

No other MCP destination is declared. The documentation links to the product,
legal pages and source repository. Widget installation, when explicitly requested,
adds a loader from https://app.voicedot.ai and causes the authorized website to
communicate with the Voicedot backend. A real browser visit is needed to verify
an accepted installation ping; the agent must not simulate one.

New-account setup is a separate, optional workflow documented in the official
[agent setup guide](https://voicedot.ai/en/docs/agents) and
[authentication guide](https://voicedot.ai/auth.md). That workflow can fetch and
run the official CLI client from app.voicedot.ai after the required consent and
host approval, and stores its private state outside the repository. The plugin
does not download or execute that client on installation. Identity verification,
the first feedback message and plan selection stay with the person where required.

## Privacy and support

The bundle itself has no database or independent retention period. The hosted
Voicedot service stores account and project data under its privacy policy;
Claude's own data handling also applies to the content returned to Claude.
Do not assume that removing this plugin deletes data from either service.

- [Setup and usage](https://voicedot.ai/en/docs/mcp)
- [Privacy policy](https://voicedot.ai/en/privacy)
- [Terms of service](https://voicedot.ai/en/terms)
- [Support](https://voicedot.ai/en/support)
- [Source](https://github.com/voicedot/voicedot-agent-plugin)

The plugin source is [MIT licensed](LICENSE). The hosted service is subject to
its own terms. This local package is not a claim of approval or publication in
Anthropic's directory.
