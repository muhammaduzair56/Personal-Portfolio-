# Muhammad Uzair — Portfolio

A responsive frontend portfolio for **Muhammad Uzair**, Full Stack Developer and AI Developer. The website uses React 19, Vite, TypeScript, Tailwind CSS 4, and custom portfolio visuals. It is configured for direct deployment on Vercel.

## Design direction

The interface follows a **Signal / Systems** visual language: dark ink surfaces, warm editorial panels, Signal Cobalt accents, Space Grotesk display type, DM Sans body type, and concise technical metadata. It is intentionally structured around systems thinking rather than a generic card-based portfolio layout.

## Run locally

```bash
pnpm install
pnpm dev
```

The local app will be available from the URL printed by Vite.

## Production build

```bash
pnpm check
pnpm build
pnpm start
```

`pnpm check` verifies TypeScript. `pnpm build` creates the deployable frontend in `dist/public`.

## Deploy to Vercel

This repository contains `vercel.json` with the required build command, output directory, install command, and SPA rewrite rule.

1. Push this project to a GitHub repository.
2. In Vercel, select **Add New → Project** and import the repository.
3. Vercel will use the included project settings automatically. If asked, use `pnpm build` as the build command and `dist/public` as the output directory.
4. Deploy.

## Project structure

| Path | Purpose |
| --- | --- |
| `client/src/pages/Home.tsx` | Portfolio content, project data, navigation, and sections. |
| `client/src/index.css` | Signal / Systems styling, responsive behavior, and motion rules. |
| `client/src/App.tsx` | Application shell and frontend routing. |
| `vercel.json` | Vercel deployment settings. |
| `ideas.md` | Design rationale and visual system documentation. |

## Content and links

The portfolio uses project information and public links supplied by Muhammad Uzair’s previous website: [uzair-portfolio01.vercel.app](https://uzair-portfolio01.vercel.app/). Update contact details, projects, or copy directly in `client/src/pages/Home.tsx` when needed.
