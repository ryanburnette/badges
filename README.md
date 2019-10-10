# [badges][1]

[![repo](https://img.shields.io/badge/repository-Github-black.svg?style=flat-square)](https://github.com/ryanburnette/badges)
[![npm](https://img.shields.io/badge/package-NPM-green.svg?style=flat-square)](https://www.npmjs.com/package/@ryanburnette/badges)

A strategy for adding badges to your lib readme.

When you publish an NPM package, it is immediateley disseminated to many sites
other than NPM's. In order to keep the canonical locations available, my
strategy is to link the package name and to add two badges, one for the
repository and one for the NPM package.

```bash
npm install -g badges
cd my-project-dir
badges
```

This will generate the Markdown for the badges. Then I copy and paste them into
the readme.

[1]: https://github.com/ryanburnette/badges
