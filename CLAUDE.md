@AGENTS.md

# Shpper — Marketing Website

Rebuild of shpper.com from WordPress to Next.js. Marketing site for SHPPER Software Design FZCO — a peer-to-peer global shopping platform connecting buyers with travelers.

**Repo:** github.com/YBouz/shpper
**Live:** shpper.vercel.app
**Owner:** Youssef Bouz (building as a favor for a friend)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.2.2, React 19.2.4 |
| Language | TypeScript 5, strict mode |
| Styling | Tailwind CSS 4, Shadcn UI (base-ui), CVA |
| i18n | next-intl 4.9 (2 locales: en, ar) |
| Animations | Framer Motion 12 |
| Icons | Lucide React + custom SVG social icons |
| Fonts | Inter (body via `--font-sans`), Montserrat (headings via `--font-heading`), Tajawal (Arabic body) |
| Hosting | Vercel |

---

## Brand

- **Primary (Navy):** `#1F3043` — backgrounds, header, footer, hero sections
- **Secondary (Gold):** `#FDBE12` — CTAs, accents, badges, active states
- **Logos:** White text on transparent — designed for dark backgrounds ONLY

---

## Project Structure

```
src/
  app/[locale]/                   # All routes under locale prefix
  components/
    home/                         # 7 homepage sections
    about/, faq/, contact/        # Page content components
    layout/                       # Header + Footer
    shared/                       # Container, SectionHeader, AppStoreButtons, social icons
    ui/                           # Shadcn components (base-ui variant)
  i18n/                           # routing, request, navigation
  lib/                            # legal-content, utils
  proxy.ts                        # next-intl middleware
messages/                         # en.json + ar.json
public/images/                    # All assets organized by category
```

---

## Important Notes

### Shadcn UI (base-ui version)
- `asChild` does NOT exist — use `render` prop or style `<a>` directly
- `Accordion` has no `type="single"` — always single by default
- `Button` doesn't support `asChild`

### Logos
- Both logos are white text on transparent — invisible on light backgrounds
- Header MUST have navy background for visibility
- Footer logo: use `style={{ height: "auto" }}` to prevent distortion

### Tailwind v4
- `bg-linear-to-br` not `bg-gradient-to-br`
- `inset-s-0` not `start-0`
- `size-100` not `size-[400px]`

---

## After-Task Protocol

1. `npm run build` — zero errors, zero warnings
2. Update `.claude/docs/` if scope or progress changed
3. Commit with descriptive conventional commit message
4. Push to origin

---

## Docs Index

- [TODO](.claude/docs/TODO.md) — Development tasks
- [ROADMAP](.claude/docs/ROADMAP.md) — Phases & future direction
- [CHANGELOG](.claude/docs/CHANGELOG.md) — Completed milestones
- [AGENTS](.claude/docs/AGENTS.md) — Agent guidance
