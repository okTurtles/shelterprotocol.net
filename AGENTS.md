# Agent Information: Shelter Protocol Documentation

This guide provides information for agents working on the Shelter Protocol documentation website.

## 🧞 Project Overview

The project is a documentation website built with [Astro](https://astro.build/) and the [Starlight](https://starlight.astro.build/) theme. It uses [Preact](https://preactjs.com/) for UI components.

- **Primary URL**: [https://shelterprotocol.net](https://shelterprotocol.net)
- **Repo**: [https://github.com/okturtles/shelterprotocol.net](https://github.com/okturtles/shelterprotocol.net)
- **Framework**: Astro 5.x + Starlight
- **Components**: Preact (.jsx)
- **Content**: MDX and Markdown

## 🛠 Essential Commands

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:4000` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro ...` | Run Astro CLI commands (e.g., `astro check`) |

## 📁 Code Organization

```text
/
├── public/                 # Static assets (images, fonts, scripts)
├── src/
│   ├── components/        # Preact and Astro components
│   │   └── head-override/ # Custom <head> overrides for Starlight
│   ├── content/           # Documentation and i18n content
│   │   ├── docs/          # MD/MDX files for the documentation
│   │   └── i18n/          # Translation JSON files
│   ├── pages/             # Astro pages (currently just a redirect)
│   ├── styles/            # SCSS and CSS styles
│   ├── consts.ts          # Project-wide constants and metadata
│   └── utils.ts           # Utility functions
├── astro.config.mjs       # Astro and Starlight configuration
└── package.json           # Dependencies and scripts
```

## 📝 Content Management

### Adding/Editing Documentation
- Documentation resides in `src/content/docs/en/`.
- Files can be `.md` or `.mdx`.
- Frontmatter must include a `title`.
- To update the sidebar, modify the `sidebar` configuration in `astro.config.mjs`.

### Metadata
- Site-wide metadata (Title, Description, URLs) is located in `src/consts.ts`.
- Individual page metadata is handled via frontmatter in the `.md`/`.mdx` files.

## 🎨 Styles and Components
- **Starlight Overrides**: Custom CSS is specified in `astro.config.mjs` under `starlight({ customCss: [...] })`. The main override file is `src/styles/override-main.scss`.
- **Preact Components**: Use the `/** @jsxImportSource preact */` directive at the top of `.jsx` files.
- **Easter Eggs**: The project contains a "turtle animation" easter egg implemented in `src/components/PageBottomAnimation/`.

## 💡 Important Gotchas

- **Redirects**: The root page `index.astro` redirects to `/en/introduction` via an inline script.
- **SCSS**: The project uses Sass for styling.
- **Vite Config**: A custom Vite configuration in `astro.config.mjs` sets `jsx: 'automatic'` to handle Preact's JSX transformation.
- **Port**: The dev server runs on port `4000` (overriding Astro's default 4321).
- **Head Component**: Starlight's `Head` component is overridden in `src/components/head-override/Head.astro`.

## 🧪 Testing and Quality
- **Type Checking**: Run `npm run astro check` to run Astro's internal type checking on documents and components.
- There is no formal test suite (no `jest` or `vitest`) configured in `package.json`.
