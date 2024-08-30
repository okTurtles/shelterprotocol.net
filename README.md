# Shelter Protocol Documentation

Welcome to Shelter Protocol documentation website!

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

To deploy your site to production, check out our [Deploy an Astro Website](https://docs.astro.build/guides/deploy) guide.

## 👀 Want to learn more?

Feel free to check [Astro's documentation](https://docs.astro.build) and [Starlight theme documentation](https://starlight.astro.build/getting-started/).

## Customize This Theme

### Site metadata

`src/consts.ts` contains several data objects that describe metadata about your site like title, description, default language, and Open Graph details. You can customize these to match your project.

## Page metadata

Astro uses frontmatter in Markdown pages to choose layouts and pass properties to those layouts. If you are using the default layout, you can customize the page in many different ways to optimize SEO and other things. For example, you can use the `title` and `description` properties to set the document title, meta title, meta description, and Open Graph description.

```markdown
---
title: Example title
description: Really cool docs example that uses Astro
---

# Page content...
```

For more SEO related properties, look at `src/components/head-override/HeadSEO.astro`

### Sidebar navigation

[Customising the sidebar navigation in the Starlight theme](https://starlight.astro.build/guides/sidebar/)

### Multiple Languages support

[Internationalization (i18n)](https://starlight.astro.build/guides/i18n/)
[Internationalization in the sidebar](https://starlight.astro.build/guides/sidebar/#internationalization)
