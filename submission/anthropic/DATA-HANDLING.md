# Draft data-handling answers — owner review required

These are proposed English answers for the current plugin-bundle form, based on
the package and the public policy inspected on 1 November 2026. They have not
been entered into a portal or accepted as legal attestations. Match each answer
to the actual current question; do not treat this file as an API schema.

## Reads or stores personal data

**Proposed answer: Yes, it can read personal data.**

Voicedot retrieves feedback from the projects authorized through the user's OAuth
connection. Feedback transcripts, conversation content, page context and team
notes may contain personal data. Tool responses follow the service's access
controls and do not expose raw visitor contact records, original audio files or
unrestricted snapshot HTML. The plugin bundle has no independent database; the
Voicedot service stores account, project and feedback data under its privacy
policy. Claude also processes the content returned in the conversation under
Anthropic's applicable terms.

## Sends data outside declared connectors

**Proposed answer for normal feedback use: No additional undeclared destination.**

The only declared MCP destination is https://mcp.voicedot.ai/mcp, operated by
Good Sheet Sp z o.o. Requests include OAuth authorization and the tool arguments
needed for the requested operation, such as project identifiers, search terms,
website addresses and approved reply or review text. No package telemetry, hooks,
local MCP executable or automatic installation command is present.

**Scope to disclose if the portal includes optional setup:** requested widget
installation uses https://app.voicedot.ai for the widget and backend. Optional
new-account setup can use the separate official CLI from that same first-party
service, with consent and host approval. The README discloses these explicitly;
those workflows are not silent background data transfers. Do not select a blanket
“No” if the actual portal wording treats these first-party setup requests as
additional destinations; enumerate them in the explanation instead.

The hosted service uses the subprocessors disclosed in its privacy policy.
Do not interpret “one MCP endpoint” as a claim that the entire SaaS has no
subprocessors.

## Retention

The plugin bundle does not retain data independently. Account/workspace data and
visitor conversations are kept while the workspace is active, with deletion on
request and the legal, billing, security and backup exceptions explained in
Voicedot's policy. Original voice recordings are not returned by the plugin;
Voicedot's service can retain them privately for up to 30 days after upload.
Saved page views have a default 90-day retention with owner-selectable settings.
These are category-specific periods, not a universal retention promise.
See https://voicedot.ai/en/privacy, especially section 9, for the complete current
schedule and deletion route. Removing the plugin is not an account-deletion request.

## Intended for people under 18

**Proposed answer: No, the intended audience is adults working on websites.**

The plugin serves developers, designers, website owners and product teams. It is
not designed or marketed for children. This is an intended-audience answer; it
does not contradict the OpenAI statement that the content is suitable for users
under 18. Ask the owner to confirm the intended-audience answer before entry.

## Contact, access and compliance

The publisher is Good Sheet Sp z o.o., the operator of Voicedot. Confirm the
monitored business contact in the actual form. The owner must review the current
four acknowledgments and the Directory Terms/Policy; do not copy the six OpenAI
attestations into Anthropic's different form. A separate MCP-connector submission
has its own questions and seven acknowledgments.

No password, OAuth client secret or repository credential is included here.
Provide dedicated reviewer credentials only in the portal's protected fields
after the owner authorizes that disclosure.
