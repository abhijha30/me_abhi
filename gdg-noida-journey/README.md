# GDG Noida — My 2026 Journey

A simple one-page showcase. Next.js (App Router) + TypeScript + Tailwind CSS v4. No backend, no database, no extra dependencies.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Deploy to Vercel

1. Push this folder to a GitHub repo (or run `npx vercel` in this folder).
2. Import it on vercel.com — no settings need changing.
3. Share the Vercel URL. The link preview (title, description, image) is set up for WhatsApp, Discord, LinkedIn, etc.

If you add a custom domain, set `NEXT_PUBLIC_SITE_URL` (e.g. `https://journey.example.com`) in Vercel so the preview image URL is correct.

## Editing content

Everything (copy, months, links) lives in `lib/content.ts`.

### Add your character design images

1. Put the image files in `public/characters/` (e.g. `character-1.png`).
2. In `lib/content.ts`, set `src` on each slot in `characterDesigns`:

```ts
{ src: "/characters/character-1.png", alt: "Describe the artwork" },
```

Add or remove slots freely. Until `src` is set, a neutral "Image coming soon" placeholder is shown.

### Behind-the-scenes screenshot

The real screenshot is at `public/behind-the-scenes.png`. Replace the file (same name) to swap it.

## Links used

| Project | URL |
| --- | --- |
| APL | https://www.instagram.com/reel/DY-CdgZzf0q/ |
| Design Samvaad | https://www.instagram.com/reel/DcYY4S3iMsD/ |
| DevFest Glimpse | https://www.instagram.com/reel/Dd9Kozqi5M-/ |
| DevFest Theme Song | https://drive.google.com/file/d/1OvNovChbabjVJll6dfcWQKEBXvD6NqPU/view?usp=drive_link |
