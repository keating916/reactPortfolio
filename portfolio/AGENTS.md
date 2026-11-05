<!-- BEGIN:nextjs-agent-rules -->

# AGENTS.md

Guidance for AI coding agents working on this repository.

## Project

Personal portfolio for Patrick Keating (Citrus Heights, CA), deployed on Vercel at https://keating916.vercel.app. It positions him for web development, SEO/SEM, social media marketing, and data analytics work with local businesses.

Two routes:

- `/` is the home page: hero, services, selected work, toolkit, about, contact.
- `/projects` is "Little projects": a grid of small coding projects, each opening a live demo in a native `<dialog>`.

## Stack

- Next.js 13.2 or newer, **Pages Router** (`pages/`). Do not migrate to the App Router unless asked.
- React with function components and hooks.
- **CSS Modules** for all component and page styling, plus one `styles/globals.css` for tokens and resets.
- Fonts through `next/font/google` in `pages/_app.js`: Bricolage Grotesque (headings, `--font-display`) and IBM Plex Sans (body, `--font-body`).
- No UI libraries, no Tailwind, no CSS-in-JS. Do not add dependencies without asking.

## Commands

Standard Next.js scripts (check `package.json` if they differ):

```
npm install
npm run dev     # http://localhost:3000
npm run build   # must pass before merging
npm run start
npm run lint    # if configured
```

## Structure

```
pages/
  _app.js              loads fonts and globals.css
  index.js             home page; content lives in arrays at the top of the file
  projects.js          projects grid + dialog
components/
  Layout.js            <Head>, header/nav, footer; wraps every page
  Layout.module.css
  Demos.js             named exports, one per demo
  Demos.module.css
styles/
  globals.css          color tokens, dark mode, resets
  Home.module.css
  Projects.module.css
public/
  files/resume.pdf     linked from the footer (keep the path)
```

## Conventions

### Styling

- Style with CSS Modules (`import s from './X.module.css'`). No inline styles except for values that are truly dynamic (for example the Etch-a-Sketch cell color).
- Use the tokens in `styles/globals.css` (`--bg`, `--surface`, `--text`, `--muted`, `--line`, `--link`, `--on-link`, `--ok`, `--mark`). Do not hard-code colors, with one exception: the Google home page replica in `Demos.module.css` uses Google's real colors on purpose.
- Dark mode is automatic through `prefers-color-scheme` in `globals.css`. Any new color must be a token with both a light and a dark value.
- Keep class names camelCase so they work as `s.className`.
- Keep layouts responsive down to about 360px wide. Existing breakpoints are around 560px and 680px.
- Keep visible keyboard focus (`:focus-visible` is set globally) and respect `prefers-reduced-motion`. Avoid decorative animation.

### Content and copy

- Home page content (services, work, toolkit, certifications) lives in plain arrays at the top of `pages/index.js`. Edit the arrays rather than the JSX.
- **Never invent metrics, client results, testimonials, or credentials.** Add numbers only when Patrick supplies them.
- Use sentence case, plain verbs, and specific button text ("Open demo", "Start a project").
- Use curly apostrophes and quotes (’ “ ”) in visible text. Keep straight quotes in code.
- Adventure RV Napa is no longer live, so it has no link. Do not add one.

### Components and demos

- Every page wraps its content in `<Layout title description>`. Always pass both props.
- Each demo is a named export in `components/Demos.js` with no required props. To add one, write the component, add a tile entry to the `projects` array in `pages/projects.js`, and add styles to `Demos.module.css`.
- The dialog only mounts the active demo, so demo state resets each time it opens. Keep it that way.
- Do not use `eval()`, `dangerouslySetInnerHTML`, or `localStorage` in demos.
- Demos that call external APIs (currently the quote generator, which uses `https://dummyjson.com/quotes/random`) must show loading and error states.

### Links and SEO

- External links use `target="_blank"` with `rel="noopener noreferrer"`.
- Keep one `<h1>` per page, with `h2` and `h3` in order below it.
- Keep each page's `<title>` and meta description unique and under roughly 60 and 160 characters.
- Internal navigation uses `next/link`; in-page anchors are `#services`, `#work`, and `#contact`.

## Before you finish a change

1. `npm run build` succeeds with no errors.
2. Check `/` and `/projects` in both light and dark mode, at desktop and phone widths.
3. Open each demo and confirm it works and closes with Esc and with the Close button.
4. Check that no new hard-coded colors, unused files, or unrequested dependencies slipped in.

## Contact details (keep in sync everywhere they appear)

- Email: keating916@gmail.com
- Phone: (916) 297-0220
- LinkedIn: https://www.linkedin.com/in/patrickkeating916
- GitHub: https://github.com/keating916

<!-- END:nextjs-agent-rules -->
