'use strict'
const execa = require('execa')
const hasYarn = require('has-yarn')

function isInstall(input) {
  return ['i', 'install'].includes(input)
}

function isUninstall(input) {
  return ['uninstall', 'remove', 'rm', 'r', 'un', 'unlink'].includes(input)
}

function hasNoFlags(flags) {
  // Meow sets all flags to false unless present, so we need to check all of them
  return !Object.keys(flags).reduce(
    (hasFlag, key) => hasFlag || flags[key],
    false
  )
}

function getFlag(input) {
  if (isInstall(input)) {
    return 'add'
  } else if (isUninstall(input)) {
    return 'remove'
  }
  return null
}

module.exports = (input, flags) => {
  if (!Array.isArray(input)) {
    return Promise.reject(
      new TypeError(`Expected a Array, got ${typeof input}`)
    )
  }

  flags = flags || {}
  const opts = {
    cwd: process.cwd(),
    stdio: 'inherit'
  }

  let task = 'npm'
  let args = process.argv.slice(2)

  if (!hasYarn()) {
    return execa(task, args, opts)
  }

  if (isInstall(input[0]) || isUninstall(input[0])) {
    task = 'yarn'
    const flag = getFlag(input[0])
    if (flags.save) {
      args = [flag].concat(input.slice(1))
    } else if (flags.saveDev) {
      args = [flag, '--dev'].concat(input.slice(1))
    } else if (flags.saveOptional) {
      args = [flag, '--optional'].concat(input.slice(1))
    } else if (flags.saveExact) {
      args = [flag, '--exact'].concat(input.slice(1))
    } else if (isInstall(input[0]) && hasNoFlags(flags)) {
      args = []
    } else if (isUninstall(input[0])) {
      args = ['remove', process.argv.slice(3)]
    } else {
      // For npm install --global and more...
      task = 'npm'
    }
  }

  return execa(task, args, opts).catch(() => {})
}
