#!/usr/bin/env node
'use strict';
const meow = require('meow');
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

prioritizeYarn(cli.input, cli.flags);
