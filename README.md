![Website](https://img.shields.io/website?down_color=lightgrey&down_message=offline&up_color=blue&up_message=online&url=https%3A%2F%2Ffindadocjp.org%2F)
[![Netlify Status](https://api.netlify.com/api/v1/badges/30c2d6af-eafd-4542-a071-d4cd0d7868a8/deploy-status)](https://app.netlify.com/sites/findadoc/deploys)
![GitHub License](https://img.shields.io/github/license/ourjapanlife/findadoc-frontend)
![W3C Validation](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Ffindadocjp.org/)
[![ESLint](https://github.com/ourjapanlife/findadoc-frontend/actions/workflows/eslint.yml/badge.svg)](https://github.com/ourjapanlife/findadoc-frontend/actions/workflows/eslint.yml)

# Find a Doc JAPAN

[Join our slack!](https://join.slack.com/t/find-a-doc/shared_invite/zt-s4744a6o-MGaGHzLN5wB9aXeha3vdsQ)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/theyokohamalife)

If you have more issues with submodules, please check out [the wiki troubleshooting page](https://github.com/ourjapanlife/findadoc-frontend/wiki/Troubleshooting-%F0%9F%98%AD-%F0%9F%98%AD-%F0%9F%98%AD-%F0%9F%91%89%EF%B8%8F-%F0%9F%98%8A-%F0%9F%98%8A--%F0%9F%98%8A)

## Getting started / Running the app

Make sure you have node [`v16.4.2`](.nvmrc) installed before installing the dependencies.

If you don't have it, the easiest way to manage node versions is by using nvm. Read the [`Install NVM guide`](https://github.com/nvm-sh/nvm#installing-and-updating).

After installing it, you need to install the correct node version:

```bash
nvm install 16.4.2
```

After the installation, just use it:

```bash
nvm use
```

Now you're ready to install the dependencies and run the app.

```bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

**NOTE**: To see current environment you are connected to, check the console logs.

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Internationalization (i18n)

Under the hood, this project uses [nuxt/i18n](https://i18n.nuxtjs.org/) and [vue-i18n](https://kazupon.github.io/vue-i18n/).

The locale files are managed through [the localization repo](https://github.com/ourjapanlife/findadoc-localization) and released as an npm package that can be updated. Here is the process for adding new translation keys:

1. Clone the [findadoc-localization repo](https://github.com/ourjapanlife/findadoc-localization)
2. Edit the `locales/en.json` to contain the new keys.
3. If you know another language, feel free to add the same key and translation to the appropriate locale file. Omit if you don't know it; we use English as the [fallback language](https://kazupon.github.io/vue-i18n/guide/fallback.html) so nothing will break.
4. Make a pull request to the localization repo and wait for it to be merged to `main`
5. Update the package inside `package.json` using `yarn upgrade @ourjapanlife/findadoc-localization` to get the latest keys imported
6. Run `yarn` again
7. Make your change in this repo with the new i18n keys and submit your PR 🎉
