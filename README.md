# Wattworks Site (Next.js + Tailwind)

A ready-to-deploy landing page for Wattworks.

## Quick start
```bash
npm i
npm run dev
# http://localhost:3000
```

## Deploy on Vercel
1. Push this folder to a new GitHub repo.
2. Go to https://vercel.com → New Project → Import repository → Deploy.
3. Add your custom domain in Vercel → Settings → Domains, update DNS.

## Update placeholders
- Replace `65YOURNUMBER` in `components/WattworksLanding.jsx` (WhatsApp link).
- Replace `YOUR_FORMSPREE_ID` in the form action.
- Update email, UEN, and any pricing.

## Stack
- Next.js 14 (App Router)
- Tailwind CSS

## Notes
- All icons/logos are inline SVG in the component (no external images required).
- Add OG image and real favicon in `/public` when ready.
