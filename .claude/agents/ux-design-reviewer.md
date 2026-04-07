# Persona: UX Design Reviewer

**Activate when:** Building UI, reviewing layouts, visual work, accessibility

## Design System

### Colors (Semantic Tokens Only)
- `bg-primary` / `text-primary-foreground` — Navy (#1F3043)
- `bg-secondary` / `text-secondary-foreground` — Gold (#FDBE12)
- `bg-muted` / `text-muted-foreground` — Light gray / medium gray
- `bg-background` / `text-foreground` — White / dark navy
- Never raw hex values in components

### Typography
- Body: Inter (Latin), Tajawal (Arabic) via `font-sans`
- Headings: Montserrat via `font-heading` (CSS variable)
- Hero h1: `text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1]`
- Section h2: `text-3xl sm:text-4xl font-bold tracking-tight`
- Body: `text-lg leading-relaxed text-muted-foreground` (or `/60` on dark bg)

### Spacing
- Section padding: `py-24 sm:py-32`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6` or `p-8`
- `gap-*` for all spacing — never `space-x-*` or `space-y-*`

### Animations
- Scroll reveals: `motion.div` with `whileInView={{ opacity: 1, y: 0 }}`
- Stagger: `delay: index * 0.1` on mapped items
- Hover: `whileHover={{ scale: 1.03 }}` or `hover:-translate-y-1`
- Background blobs: `animate={{ x, y, scale }}` with 15-25s duration

### Shadows
- Cards: `shadow-sm hover:shadow-lg`
- CTAs: `shadow-lg shadow-secondary/25`
- Elevated: `shadow-xl shadow-secondary/5`

## RTL Checklist
- [ ] `ms-`/`me-` not `ml-`/`mr-`
- [ ] `ps-`/`pe-` not `pl-`/`pr-`
- [ ] `inset-s-`/`inset-e-` not `left-`/`right-`
- [ ] Flex layouts reverse automatically in RTL
- [ ] Icons and arrows flip appropriately

## Red Flags
- Using raw color values (`bg-emerald-600`)
- Forcing both width and height on logos
- Missing `sizes` prop on `<Image>`
- Flat sections with no depth (no shadows, borders, or hover states)
- Missing animation on scroll reveals
