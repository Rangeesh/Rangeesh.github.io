# Rangeesh Venkatesan

Personal website at https://rangeesh.github.io. Jekyll, plain CSS, and a small progressive-enhancement script. No frontend framework, external fonts, analytics, or comment service.

## Local preview

Use Ruby 3.3 or newer with Bundler:

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4173
```

Open http://127.0.0.1:4173. Development servers must bind only to localhost.

```sh
JEKYLL_ENV=production bundle exec jekyll build --strict_front_matter
```

## Publish a blog post

Create `_posts/YYYY-MM-DD-your-title.md` in GitHub's editor or locally. Start with front matter:

```yaml
---
title: "Your article title"
subtitle: "An optional short introduction"
category: Engineering
tags: [robotics, learning]
description: "An optional description for search engines and social previews"
---
```

Write the body in Markdown. The article layout, publication date, reading time, latest-writing list, archive, category filters, topic index, RSS, and sitemap update automatically. Dates in filenames control publication; future-dated posts remain unpublished until their date. Use `<!--more-->` to end an explicit excerpt; otherwise the index shows the first 35 words of Jekyll's excerpt. Images live in `assets/img/` and can be embedded with `![Descriptive alt text](/assets/img/your-image.jpg)`.

Optional front matter: `cover-img`, `cover-alt`, and `share-img`. Use `permalink` only to deliberately override the default `/:year-:month-:day-:title/` URL. Existing post content and the December 2024 article URL are preserved.

Posts remain readable without JavaScript. Search matches all query words against titles, subtitles, and article text, combined with the selected category. Only published categories are offered.

## Update the portfolio

- `_data/career.yml`: highlights, experience, research, education, recognition, skills.
- `_config.yml`: name, description, email, LinkedIn, GitHub, canonical URL, portrait.
- `index.html`: homepage introduction and section order.
- `work.html`: work and achievements.
- `aboutme.md`: biography; existing `/aboutme` route preserved.
- `assets/css/site.css`: responsive visual design.
- `_layouts/base.html`: navigation, metadata, footer.

The supplied newer résumé is authoritative for current roles and contact information. The older résumé provides selected academic and Formula Student achievements. Street address and phone are not published. The two résumés disagree on the AutoDrive Year 2 calendar year, so the site identifies the competition as **Year 2** without assigning a disputed year. Add only material you intend to make public.

## Deployment

The repository currently publishes GitHub Pages from `master` at the repository root. Push or merge into `master` to trigger GitHub's existing Pages build and deployment; no hosting change is required. Check the **pages build and deployment** run in GitHub Actions after publishing. The custom CI workflow separately builds the site and uploads a Pages artifact for verification; it does not change the configured Pages source.

## Credits

Originally forked from [Beautiful Jekyll](https://github.com/daattali/beautiful-jekyll), by Dean Attali. The original MIT license is retained. The personal redesign replaces the theme's layouts, styles, and client dependencies while keeping Jekyll and the published post URLs.
