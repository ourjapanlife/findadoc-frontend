# findadoc

## Initialize submodule for localization files

Note this project uses a git submodule to manage translations. That repository is [here](https://github.com/ourjapanlife/findadoc-localization)

```bash
# init submodules when running for the first time
$ git submodule update --init --recursive
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
