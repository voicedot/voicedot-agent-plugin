# Tool and workflow reference

The packaged contract records tool schemas, scopes and exact annotations. Current server results govern authorization and pagination; a skill never grants access.

| Need | Path |
|---|---|
| Setup progress when asked | `get_next_steps` |
| Product explanation | `explain_voicedot` with the relevant topic |
| Project selection | `list_projects`, optionally `resolve_project_context` |
| Create a project or add an address | `create_project` / `add_project_address`, explicit request and setup permissions |
| Verify installation | `get_project_installation`, repository installation, real browser, `get_project_installation_status` |
| All visible pin threads | `search_pins(fields=full)`, every cursor in scope |
| One thread | `get_pin_thread`; honor its oversized-thread pagination fallback |
| Conversation or page | `get_conversation` / `get_page_feedback` |
| Bounded evidence / search | `prepare_feedback_evidence`, `search_feedback`, `search_feedback_across_projects` |
| Summaries and coverage | `get_project_summary`, `get_quarantine_summary` |
| Match a page element | `match_pin_attribute` against authorized context |
| Change pin visibility | `set_pin_statuses`, permission `feedback:resolve` |
| Resolve a discussion | `resolve_pin_thread` / `resolve_conversation`, permission `feedback:resolve` |
| Resolve a batch | `prepare_bulk_resolve`, preview, human yes, `confirm_bulk_resolve` |
| Reply | `prepare_thread_reply`, exact preview, human yes, `send_thread_reply` |
| Human review | `prepare_review_round`, preview, human yes, `confirm_review_round`; inspect with `list_review_rounds` / `get_review_round` |

Private/direct feedback is immediately visible. Team/Public feedback requires a team handover. The handover note and frozen conversation are the agent's scope, not an invitation to read other messages. Human Checked/Needs fix decisions remain on the human review page.

Five review cases and three negative cases live in `plugin.json`. A separate authorized write rehearsal uses the open phone-spacing thread, preserving the closed Help thread and the review-round state.
