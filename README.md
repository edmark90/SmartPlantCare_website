# SmartPlantCare

Static HTML website styled with Tailwind CSS v3.4.17. Open `index.html` in a browser. The generated `css/tailwind.css` is included, so viewing the site does not require Node.js or a Tailwind CDN.

## Editing styles

Edit component styles in `css/input.css`, which uses Tailwind `@apply` utilities and preserves the original selector order and responsive breakpoints. Semantic classes in `index.html` also provide the JavaScript interaction hooks. The original reset is retained instead of Tailwind Preflight to avoid changing the established design.

From this directory, rebuild after changing classes or the Tailwind source:

```powershell
.\build-css.cmd
```

For automatic rebuilding while editing:

```powershell
.\build-css.cmd --watch
```

The script downloads the official pinned Windows x64 standalone Tailwind compiler when needed. The compiler is ignored by Git; commit the generated `css/tailwind.css` with source changes.

The old `css/global.css`, `css/index.css`, and `css/refresh.css` are retained for reference and are no longer loaded by the page. FAQ, navigation, and back-to-top interactions remain in `js/index.js`.
