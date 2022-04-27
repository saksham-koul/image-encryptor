#!/usr/bin/env node

/**
 * imgencrypt
 * Encrypt the selected image
 *
 * @author Saarthak <none>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;
const encrypt = require('./utils/encrypt');
const decrypt = require('./utils/decrypt');

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);


	if(flags.encrypt) {
		console.log(flags.encrypt)
		if(flags.outputImageFileName) {
			console.log(flags.outputImageFileName)
		}
		if(flags.outputKeyFileName) {
			console.log(flags.outputKeyFileName)
		}
		await encrypt(flags)
	}
	if(flags.decrypt) {
		console.log(flags.decrypt)
		if(flags.outputImageFileName) {
			console.log(flags.outputImageFileName)
		}
		if(flags.key) {
			console.log(flags.key)
		}
		await decrypt(flags)
	}
})();
