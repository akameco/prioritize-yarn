'use strict';
const execa = require('execa');
const hasYarn = require('has-yarn');

function isInstall(input) {
	return input === 'i' || input === 'install';
}

module.exports = (input, flags) => {
	if (!Array.isArray(input)) {
		return Promise.reject(new TypeError(`Expected a Array, got ${typeof input}`));
	}

	flags = flags || {};

	let task = 'npm';
	let args = input;

	if (Object.keys(flags).length === 0 && input.length === 1 && isInstall(input[0]) && hasYarn()) {
		task = 'yarn';
		args = [];
	}

	const opts = {
		cwd: process.cwd(),
		stdio: 'inherit'
	};

	return execa(task, args, opts).catch(() => {});
};
