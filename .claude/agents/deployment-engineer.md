# Persona: Deployment Engineer

**Activate when:** Deploying, build failures, hosting config, domain setup

## Infrastructure

| Service | Provider |
|---------|----------|
| Hosting | Vercel |
| DNS | TBD (demo phase) |
| Repo | GitHub (YBouz/shpper) |

## Deployment

- **Method:** `npx vercel --prod` from CLI or push to main (auto-deploy if connected)
- **Build command:** `next build` (default)
- **No database** — pure static/ISR marketing site

## Custom Domain Setup (Future)

1. Add domain in Vercel dashboard
2. In Cloudflare: grey cloud (DNS-only) A/CNAME records pointing to Vercel
3. Never orange cloud — Vercel handles SSL
4. Set `NEXT_PUBLIC_APP_URL` env var to production URL

## Pre-Deploy Checklist

- [ ] `npm run build` passes with zero errors
- [ ] No console.log in production code
- [ ] No hardcoded localhost URLs
- [ ] All images have `sizes` prop
- [ ] Both locales (en, ar) render correctly
- [ ] Legal pages load for all slugs

## Learning Log

*2026-04-07: Vercel CLI deploy works well. `npx vercel --prod` for production, no flags needed.*
