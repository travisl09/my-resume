# resume-builder

This is a Vue 3 / Vite project aimed at quickly generating resumés and cover letters to target specific jobs. The intent is to clone this repository, modify the resumé view components, and push to your own repository so that you can use GitHub pages functionality to freely host your job specific resumé page(s).

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
cd /path/to/my/resume/folder
git init
git pull https://github.com/travisl09/resume-builder.git
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
Configure routes via /src/router/index.js

Modify DefaultResume.vue according to your needs

To create job specific pages, copy / paste / rename DefaultResume.vue and optionally add a cover letter slot as shown in the BolognaUnlimited.vue example file

### Compile and Minify for Production

If you named your resumé repository folder something other than 'my-resume', update your /vite.config.js 'base' config value to your repo's name, then:
```sh
npm run build
```

### Publish to GitHub Pages

Push to a public GitHub repository and configure GitHub pages for the repository via:

Settings -> Pages -> Deploy from a branch | Branch = main | Folder = /docs

View at https://\<username\>.github.io/\<repo-name\>/