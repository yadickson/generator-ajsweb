'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('valuename', {
            type: String,
            required: true,
            desc: '[Value name]'
        });

        this.option('disableConsole', {
            desc: 'Disable yosay console (default: false)'
        });

        this.name = this.options.valuename;
        this.console = !this.options.disableConsole;
    }

    install() {
        this.composeWith(require.resolve('generator-ajsbase/generators/value'), {
            arguments: [this.name, 'app/scripts'],
            disableConsole: !this.console
        });
    }
};