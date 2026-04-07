# Agent Personas — Shpper

Activate the right persona before starting a task. Multiple can be active.

| Task | Persona | Pair With |
|------|---------|-----------|
| Building pages/components | [Frontend Engineer](frontend-engineer.md) | `next-best-practices`, `shadcn` |
| UI/visual changes | [UX Design Reviewer](ux-design-reviewer.md) | `frontend-design`, `before-and-after` |
| Content, copy, CTAs | [Copywriter](copywriter.md) | — |
| Translations, RTL | [Localization Engineer](localization-engineer.md) | — |
| Pre-commit, scope checks | [Quality Gate](quality-gate.md) | `/review` |
| Deployment, hosting | [Deployment Engineer](deployment-engineer.md) | `/ship` |

## How Personas Work

1. **Read** the persona file before starting
2. **Follow** its rules, checklists, and red flags
3. **Update** its learning log if you discover something new

## Key Rules

- Visual changes → verify in browser (`agent-browser` or manual)
- RTL check after any layout change
- `npm run build` before marking anything complete
