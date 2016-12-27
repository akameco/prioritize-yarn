# prioritize-yarn [![Build Status](https://travis-ci.org/akameco/prioritize-yarn.svg?branch=master)](https://travis-ci.org/akameco/prioritize-yarn)

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

## License

MIT © [akameco](http://akameco.github.io)
