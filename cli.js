#!/usr/bin/env node
'use strict'
const meow = require('meow')
const updateNotifier = require('update-notifier')
const prioritizeYarn = require('./')

const cli = meow({
  help: false,
  version: false,
  flags: {
    save: {
      type: 'boolean',
      alias: 'S'
    },
    'save-dev': {
      type: 'boolean',
      alias: 'D'
    },
    'save-optional': {
      type: 'boolean',
      alias: 'O'
    },
    'save-exact': {
      type: 'boolean',
      alias: 'E'
    }
  }
})

updateNotifier({ pkg: cli.pkg }).notify()

prioritizeYarn(cli.input, cli.flags)
