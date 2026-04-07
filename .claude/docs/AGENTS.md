# Agent Guidance — Shpper

## Adding a New Page

1. Create `src/app/[locale]/[page-name]/page.tsx` (server component, metadata)
2. Create `src/components/[page-name]/[page-name]-content.tsx` (client component)
3. Add translations to `messages/en.json` and `messages/ar.json`
4. Add navigation link if it belongs in the header/footer
5. Add `loading.tsx` and consider `error.tsx`
6. Run `npm run build` — zero errors

## Key Conventions

- **Server components** by default. `"use client"` only for: useState, useEffect, event handlers, Framer Motion
- **All page content components** are client components (they use `useTranslations` + Framer Motion)
- **Page files** are thin server wrappers that import the content component + generate metadata
- **Animations:** Use Framer Motion `motion.div` with `whileInView` for scroll reveals
- **Sections:** Each homepage section is its own component in `src/components/home/`

## What NOT to Do

- Never use `any` type
- Never use `console.log` in production
- Never use raw color values — use semantic tokens (`bg-primary`, `text-secondary`)
- Never use `asChild` on Shadcn buttons — this is the base-ui version
- Never put `useSearchParams()` outside `<Suspense>`
- Never force both `width` and `height` on logo images — one dimension + `height: auto`
- Never use `bg-gradient-to-*` — use `bg-linear-to-*` (Tailwind v4)
- Never use `start-*` / `end-*` — use `inset-s-*` / `inset-e-*` (Tailwind v4)
- Never use `space-x-*` or `space-y-*` — use `gap-*`
