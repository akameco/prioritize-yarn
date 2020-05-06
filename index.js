'use strict'
const execa = require('execa')
const hasYarn = require('has-yarn')

function isInstall(input) {
  return ['i', 'install'].includes(input)
}

function isUninstall(input) {
  return ['uninstall', 'remove', 'rm', 'r', 'un', 'unlink'].includes(input)
}

function isLink(input) {
  return ['link', 'ln'].includes(input)
}

function hasNoFlags(flags) {
  // Meow sets all flags to false unless present, so we need to check all of them
  return !Object.keys(flags).reduce(
    (hasFlag, key) => hasFlag || flags[key],
    false
  )
}

function getCmd(input) {
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
    stdio: 'inherit',
  }

  let task = 'npm'
  const inputCmd = input[0]
  let args = input

  if (!hasYarn()) {
    return execa('npm', input, opts)
  }

  if (isLink(inputCmd)) {
    task = 'yarn'
    args = ['link'].concat(input.slice(1))
  }

  if (isInstall(inputCmd) || isUninstall(inputCmd)) {
    task = 'yarn'
    const cmd = getCmd(inputCmd)
    if (flags.save) {
      args = [cmd].concat(input.slice(1))
    } else if (flags.saveDev) {
      args = [cmd, '--dev'].concat(input.slice(1))
    } else if (flags.saveOptional) {
      args = [cmd, '--optional'].concat(input.slice(1))
    } else if (flags.saveExact) {
      args = [cmd, '--exact'].concat(input.slice(1))
    } else if (isInstall(inputCmd) && hasNoFlags(flags)) {
      args = []
    } else if (isUninstall(inputCmd)) {
      args = ['remove'].concat(input.slice(1))
    } else {
      // For npm install --global and more...
      task = 'npm'
    }
  }

  return execa(task, args, opts).catch(() => {})
}
