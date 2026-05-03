# CLAUDE.md

## Repo Overview
- Astro-based personal brand site for Devi Priya K
- Deployed at devislabai.com via GitHub Pages
- Cloudflare Pages migration planned (not done yet)

## Key File Paths
- Blog page: src/pages/blog/index.astro
- Templates page: src/pages/templates/index.astro
- GEO template standalone page: src/pages/templates/geo-checklist.astro
- Blog posts: src/content/blog/ (MDX files)
- Public assets: public/
- llms.txt: public/llms.txt

## Content Conventions
- Blog posts are MDX files in src/content/blog/
- Each post has frontmatter: title, description, date, tags, cover image
- Cover images live in public/images/
- External Medium posts get summary cards on /blog/ page — NOT full MDX posts
- Summary cards link to Medium, YouTube, and /templates/
- Template pages are standalone HTML files with NO site layout, nav, or global CSS

## Brand Colors
- Dark Ink: #1A1814
- Burnt Orange: #D45C2E
- Cream: #F5F2EC

## Fonts
- DM Serif Display (headings)
- DM Sans (body)
- DM Mono (code/accent)

## Content Publishing Workflow
1. Blog post written and published on Medium first
2. Summary card added to /blog/ page via this repo
3. Template (if any) added to /templates/ as standalone HTML
4. YouTube video published and linked in Medium post
5. Summary card links to: Medium post + YouTube + template

## Current Content
- GEO blog post: live on Medium https://medium.com/@devipriyakaruppiah/getting-started-with-generative-engine-optimization-geo-a-guide-for-bloggers-79c5b2c9d0d0
- GEO YouTube: https://youtu.be/d3zFGKVebGg
- GEO template: /templates/geo-checklist/
- llms.txt: added May 2026

## Pending
- Cloudflare Pages migration (after current workflow proven)
- FAQPage JSON-LD schema per blog post (parked for now)

## Notes for Claude Code
- Always check existing card/component patterns before adding new ones — match exactly
- Standalone template pages must never inherit site layout
- Run /compact at start of sessions older than 1 week
- New summary cards go at TOP of blog list (newest first)
