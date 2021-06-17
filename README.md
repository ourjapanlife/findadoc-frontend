![Website](https://img.shields.io/website?down_color=lightgrey&down_message=offline&up_color=blue&up_message=online&url=https%3A%2F%2Ffindadocjp.org%2F)
![Netlify](https://img.shields.io/netlify/todo)
![GitHub License](https://img.shields.io/github/license/ourjapanlife/findadoc-frontend)
![W3C Validation](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Ffindadocjp.org/)

# findadoc

## Working with the submodule

Note this project uses a git submodule to manage translations. That repository is [here](https://github.com/ourjapanlife/findadoc-localization)

```bash
# init submodules when running for the first time
$ git submodule update --init --recursive
```

```bash
# run this when you need to update the submodule
$ git submodule update
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
