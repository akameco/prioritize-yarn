#!/usr/bin/env node
'use strict';
const meow = require('meow');
const prioritizeYarn = require('./');

const cli = meow({help: false});

prioritizeYarn(cli.input, cli.flags);
