const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
    clear: {
        type: `boolean`,
        default: true,
        alias: `c`,
        desc: `Clear the console`
    },
    noClear: {
        type: `boolean`,
        default: false,
        desc: `Don't clear the console`
    },
    debug: {
        type: `boolean`,
        default: false,
        alias: `d`,
        desc: `Print debug info`
    },
    version: {
        type: `boolean`,
        alias: `v`,
        desc: `Print CLI version`
    },
    encrypt: {
        type: `string`,
        alias: `e`,
        desc: `Encrypt the image`
    },
    decrypt: {
        type: `string`,
        alias: `d`,
        desc: `Decrypt the image`
    },
    outputImageFileName: {
        type: `string`,
        default: 'outputImage',
        desc: `The output image file name`,
        alias: `i`
    },
    outputKeyFileName: {
        type: `string`,
        default: 'outputKey',
        desc: `The output key file name`,
        alias: `p`
    },
    key: {
        type: `string`,
        desc: `The key file to use for decryption`,
        alias: `k`
    }
};

const commands = {
    help: {desc: `Print help info`}
};

const helpText = meowHelp({
    name: `encrypt`,
    flags,
    commands
});

const options = {
    inferType: true,
    description: false,
    hardRejection: false,
    flags
};

module.exports = meow(helpText, options);
