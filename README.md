## Portfolio Website

Personal portfolio built with Next.js 14 (App Router) + Tailwind CSS. It highlights full stack and machine learning projects with filterable cards, experience highlights, and contact CTAs.

### Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the site locally. Edits inside `src/` hot-reload automatically.

### Project structure

- `src/app/page.tsx` – top-level page composed from modular sections
- `src/components` – reusable UI (hero, header, project card, sections)
- `src/data` – structured content for projects, skills, and experience
- `public` – static assets (add project thumbnails here if desired)

### Adding or updating projects

1. Open `src/data/projects.ts`.
2. Duplicate an existing entry in the `projects` array and update:
   - `slug`: unique identifier (used for React keys).
   - `title`, `tagline`, `description`.
   - `category`: `"Full Stack"` or `"Machine Learning"` (drives filters).
   - `status`: `"deployed" | "in-progress" | "upcoming"` (renders badge).
   - `tech`: array of tools/languages.
   - `highlights`: 2–3 bullet points describing impact.
   - Optional `liveUrl`, `repoUrl`, `thumbnail`, `featured`, `year`.
3. (Optional) Add a thumbnail image under `public/images/projects/` and set the `thumbnail` path (e.g. `/images/projects/my-project.png`).
4. Save—no additional wiring is necessary. Filters and cards update automatically.

### Editing skills or experience

- Update `src/data/skills.ts` to adjust capability groups.
- Update `src/data/experience.ts` to tweak timeline entries.

### Theming notes

The palette sticks to:

- Background: `#F9FAFB`
- Primary text: `#111827`
- Accent: Muted blue `#3B82F6` (with teal `#0D9488` available for variety)

Soft shadows and hover transitions are applied via Tailwind classes defined in components and `globals.css`.

### Deployment

The project is ready for Vercel or any Node-friendly host:

```bash
npm run build
npm run start
```

Set `metadataBase` and contact links in `src/app/layout.tsx` and the components under `src/components/` before shipping to production.
