# prioritize-yarn [![Build Status](https://travis-ci.org/akameco/prioritize-yarn.svg?branch=master)](https://travis-ci.org/akameco/prioritize-yarn) [![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)

> If the project has yarn.lock, change npm install to yarn.

## CLI

```
$ npm install --global prioritize-yarn
```

```
$ alias npm='prioritize-yarn'
// Using yarn, when there is a `yarn.lock`.
$ npm install
yarn install v0.18.1
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...
✨  Done in 2.25s.
```

## Recommend

Add this to ~/.bashrc or ~/.zshrc:

```
alias npm=prioritize-yarn
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://akameco.github.io"><img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;" alt="akameco"/><br /><sub><b>akameco</b></sub></a><br /><a href="https://github.com/akameco/prioritize-yarn/commits?author=akameco" title="Code">💻</a> <a href="https://github.com/akameco/prioritize-yarn/commits?author=akameco" title="Documentation">📖</a> <a href="#infra-akameco" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td><td align="center"><a href="http://www.miguelmadero.com"><img src="https://avatars2.githubusercontent.com/u/47388?v=4" width="100px;" alt="Miguel Madero"/><br /><sub><b>Miguel Madero</b></sub></a><br /><a href="https://github.com/akameco/prioritize-yarn/commits?author=MiguelMadero" title="Code">💻</a></td></tr></table>
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
