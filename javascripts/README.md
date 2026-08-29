# Bookmarklets

One `.js` file per bookmarklet. Each file's body is the bookmarklet source: to
use one, create a browser bookmark whose URL is `javascript:` followed by the
(minified) contents of the file.

- Files are named `"<Site/Context> - <Action>.js"` (e.g.
  `"Google Search - Search selection.js"`), grouped by the site or DOM context
  they act on.
- **`index.json`** — the catalog (each entry: `name` + human-readable
  `description`). It is the source of truth for the GitHub Pages site under
  [`../docs/`](../docs/); keep it in sync when adding or removing a bookmarklet.

When adding a bookmarklet, add the `.js` file here and a matching entry in
`index.json`.
