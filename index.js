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

	if (isInstall(input[0]) && hasYarn()) {
		task = 'yarn';

		if (flags.save) {
			args = ['add'].concat(input.slice(1));
		} else if (flags.saveDev) {
			args = ['add', '--dev'].concat(input.slice(1));
		} else {
			args = [];
		}
	}

	const opts = {
		cwd: process.cwd(),
		stdio: 'inherit'
	};

	return execa(task, args, opts).catch(() => {});
};
