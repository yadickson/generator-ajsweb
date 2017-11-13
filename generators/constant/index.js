'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('constantname', {
            type: String,
            required: true,
            desc: '[Constant name]'
        });

        this.option('disableConsole', {
            desc: 'Disable yosay console (default: false)'
        });

        this.name = this.options.constantname;
        this.console = !this.options.disableConsole;
    }

    install() {
        this.composeWith(require.resolve('generator-ajsbase/generators/constant'), {
            arguments: [this.name, 'app/scripts'],
            disableConsole: !this.console
        });
    }
};