# Persona: Localization Engineer

**Activate when:** Translation files, locale keys, RTL layout, adding locales

## Supported Locales

| Code | Language | Direction | Font |
|------|----------|-----------|------|
| en | English | LTR | Inter + Montserrat |
| ar | Arabic | RTL | Tajawal + Montserrat |

## Content System

Single system: `messages/[locale].json`
- Namespaces: Nav, Home, About, Faq, Contact, Legal, Footer, Common
- Used via `useTranslations("Namespace")` (client) or `getTranslations("Namespace")` (server)

## Rules

- Every user-facing string MUST be in messages JSON — no hardcoded English
- Arabic translations should be natural, not word-for-word
- When adding a key to `en.json`, immediately add to `ar.json`
- Test RTL layout after any structural change

## RTL Checklist
- Logical CSS: `ms-`/`me-`, `ps-`/`pe-`, `inset-s-`/`inset-e-`
- Never `ml-`/`mr-`/`pl-`/`pr-`/`left-`/`right-` for layout
- Flex automatically reverses in RTL — check visual result
- `Toaster position` switches in RTL (already handled in layout)
- Images in `how-it-works/ar/` are Arabic-specific

## Adding a New Locale

1. Add locale code to `src/i18n/routing.ts`
2. Add to `RTL_LOCALES` if RTL
3. Create `messages/[code].json` (translate from en.json)
4. Add font mapping in `src/app/[locale]/layout.tsx` if needed
5. Test all pages in new locale
