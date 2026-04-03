# devi-website-v2 — Personal Brand Site built with Astro

My personal brand site rebuilt from scratch using [Astro](https://astro.build) — fast, clean, and deployed to GitHub Pages.

> **Live site:** https://lulu3202.github.io/devi

---

## What this is

I replaced my old GitHub Pages Jekyll portfolio with a modern static site that reflects who I actually am: a content creator who builds with AI.

Built entirely with **Astro** (no heavy JS frameworks), styled with plain CSS, and deployed via **GitHub Actions**.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Astro v4](https://astro.build) | Static site generator |
| Plain CSS + CSS Variables | Styling (no Tailwind) |
| TypeScript | Content data files |
| GitHub Actions | CI/CD deployment |
| GitHub Pages | Hosting |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, featured projects, latest writing, YouTube CTA |
| `/writing/` | Article cards linking to Medium & Towards AI |
| `/youtube/` | Embedded YouTube videos from Devi's Lab |
| `/projects/` | 5 curated AI projects with tech stack badges |
| `/about/` | Bio, career timeline, certifications, contact |

---

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Nav.astro
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── ArticleCard.astro
│   ├── ProjectCard.astro
│   ├── TechBadge.astro
│   ├── YouTubeEmbed.astro
│   ├── TimelineItem.astro
│   └── CertBadge.astro
├── data/             # All site content as typed TypeScript arrays
│   ├── articles.ts
│   ├── projects.ts
│   ├── videos.ts
│   ├── timeline.ts
│   └── certifications.ts
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── writing.astro
│   ├── youtube.astro
│   ├── projects.astro
│   └── about.astro
└── styles/
    └── global.css
public/
└── images/           # All site images
```

---

## Running Locally

**Prerequisites:** Node.js 18+

```bash
# Clone the repo
git clone https://github.com/lulu3202/devi-website-v2.git
cd devi-website-v2

# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:4321/devi

# Build for production
npm run build
```

---

## Deploying to GitHub Pages

This site deploys automatically via GitHub Actions on every push to `main`.

**One-time setup:**
1. Go to your repo → **Settings → Pages → Source → GitHub Actions**
2. Push to `main` — the workflow handles the rest

The workflow file is at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

---

## Customising for Your Own Site

All content lives in [`src/data/`](src/data/) as simple TypeScript arrays — no CMS needed.

| File | What to update |
|---|---|
| `src/data/articles.ts` | Your blog post titles, URLs, descriptions |
| `src/data/projects.ts` | Your project names, images, GitHub links |
| `src/data/videos.ts` | Your YouTube video IDs |
| `src/data/timeline.ts` | Your career history |
| `src/data/certifications.ts` | Your certifications + credential URLs |

Update `astro.config.mjs` with your own `site` and `base` values:

```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name',
});
```

---

## Design System

- **Accent color:** `#FF6B6B` (coral)
- **Background:** `#FAFAFA` (warm off-white)
- **Font:** Inter (Google Fonts)
- **Approach:** CSS custom properties — no utility framework

---

## About Me

I'm Devi Priya — Senior AI Product Manager and content creator. I write beginner-friendly AI tutorials on [Medium](https://medium.com/@devipriyakaruppiah) and create step-by-step videos on [YouTube (@devislab)](https://www.youtube.com/@devislab).

---

*Built with [Astro](https://astro.build) · Deployed on [GitHub Pages](https://pages.github.com)*
