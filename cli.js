#!/usr/bin/env node
'use strict';
const meow = require('meow');
const updateNotifier = require('update-notifier');
const prioritizeYarn = require('./');

const cli = meow({
	help: false
}, {
	boolean: ['save', 'save-dev'],
	alias: {
		S: 'save',
		D: 'save-dev'
	}
});

updateNotifier({pkg: cli.pkg}).notify();

prioritizeYarn(cli.input, cli.flags);
