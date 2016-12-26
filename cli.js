#!/usr/bin/env node
'use strict';
const meow = require('meow');
const updateNotifier = require('update-notifier');
const prioritizeYarn = require('./');

const cli = meow({
	help: false,
	version: false
}, {
	boolean: [
		'save',
		'save-dev',
		'save-optional',
		'save-exact'
	],
	alias: {
		S: 'save',
		D: 'save-dev',
		O: 'save-optional',
		E: 'save-exact'
	}
});

updateNotifier({pkg: cli.pkg}).notify();

prioritizeYarn(cli.input, cli.flags);
