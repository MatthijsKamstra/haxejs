# Convert from Gitbook to Docsify

I used Gitbook for generation of this documentation. However, recently I started looking for alternatives in case GitBook stops being free.

The tools I had didn't work anymore, didn't want to make an login on the new platform.

I have worked with docsify before and the migration is really easy.

## How to migrate to docsify.js?

First Install docsify:

```bash
npm  i docsify-cli -g
```

1. Initialize docsify on your repo folder: `docsify init docs` (default gitlab will use `docs` folder for documentation)
2. Rename `summary.md` to `_sidebar.md` (yes, it’s that simple!)
3. Copy all the folders/files into `docs` folder
4. Add `loadSidebar: true` to `window.$docsify` in `index.html`
5. That’s all there is to it! Now run: `docsify serve`
6. And push it to Github.
7. update absolute links to new docs (`tree/master/` to `tree/master/docs/`)

Specific for my documentation:

- copy `readme.md` to docs
- copy `.nojekyll` to docs  (if not generated)
- copy `index.html` to docs (if not generated)
- copy `favicon.ico` to docs
- update `index.html` the js: `window.$docsify`
- copy data from `book.json` to `window.$docsify`
- change `_sidebar.md` "example" to example
- change `_sidebar.md`  "How to" to "More info"



## Resource

- https://docsify.js.org
- https://timdams.com/2019/05/02/migrating-from-gitbook-to-docsify-js/
