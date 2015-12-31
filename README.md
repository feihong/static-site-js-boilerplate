# Static Site Boilerplate (JavaScript Version)

This is a boilerplate project for creating a static site that uses a lot of JavaScript.

## Installation

Download the project:

```
curl -sL https://github.com/feihong/static-site-js-boilerplate/archive/master.tar.gz | tar xz
```

Install dependencies:

```
pip install -r requirements.txt
npm install -g webpack
```

Install local JS modules:

```
npm install
```

## Commands

- `invoke serve` - Launch HTTP server that auto-reloads pages when it detects an edit
- `invoke build` - Generate all files and copy them into the build directory
- `invoke clean` - Delete everything inside the build directory
- `invoke buildjs` - Only generate the JS files, using webpack
- `invoke watchjs` - Start a process that watches .babel.js files and compiles them, with debugging support
- `invoke publish` - Changes in the build directory are committed and pushed to the gh-pages branch
- `invoke new_page` - Add a new page to the site directory (also adds new entry to webpack config file)
