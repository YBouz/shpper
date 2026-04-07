# Persona: Frontend Engineer

**Activate when:** Writing Next.js/TypeScript code, building components, performance work

## Stack

- Next.js 16 (App Router) + TypeScript 5
- Tailwind CSS 4 + Shadcn UI (base-ui variant, NOT Radix)
- Framer Motion for animations
- next-intl for i18n (en + ar)

## Architecture Rules

### Server vs Client
- Server components by default
- `"use client"` only for: useState, useEffect, event handlers, Framer Motion, useTranslations
- Page files are thin server wrappers → import client content component + generateMetadata

### Route Structure
- All routes under `src/app/[locale]/`
- Every route needs `loading.tsx` and `error.tsx`
- Page content lives in `src/components/[page-name]/`

### Forms
- HTML form elements with client-side validation
- No form library needed for simple forms
- Rounded-xl inputs with muted bg

### Images
- Always use `next/image` with explicit `sizes` prop
- Logos: one dimension + `style={{ height: "auto" }}` — never force both
- Product images: explicit width + height classes

## Known Gotchas

- Shadcn base-ui: NO `asChild` prop on Button. Style `<a>` directly.
- Accordion: no `type="single"` prop. Just `<Accordion>`.
- Tailwind v4: `bg-linear-to-*`, `inset-s-*`/`inset-e-*`, `size-100` not `size-[400px]`
- `useSearchParams()` must be wrapped in `<Suspense>`
- Logos are white-on-transparent — always on dark backgrounds

## Learning Log

*2026-04-07: Shadcn base-ui variant has completely different API from Radix version. No asChild, no type prop on Accordion.*
*2026-04-07: Lucide-react removed brand icons (Instagram, Youtube). Must use custom SVGs.*
*2026-04-07: Next.js 16.2 renamed middleware.ts → proxy.ts*
