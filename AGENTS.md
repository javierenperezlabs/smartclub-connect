<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Use TanStack file routes for the workspace and customer portal; shared navigation stays in the root shell so role switching does not lose demo state.
- Keep synthetic customer state and deterministic recommendations in a shared React provider; all approvals, redemptions and timeline events use this single session-scoped source of truth, without real AI or external transactions.
- Keep visual tokens and product-specific layout rules in the global stylesheet to maintain consistent presentation across both experiences.
