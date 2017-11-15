'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('ctrlname', {
            type: String,
            required: true,
            desc: '[Controller name]'
        });

        this.option('disableConsole', {
            desc: 'Disable yosay console (default: false)'
        });

        this.name = this.options.ctrlname;
        this.console = !this.options.disableConsole;
    }

    install() {
        this.composeWith(require.resolve('generator-ajsbase/generators/controller'), {
            arguments: [this.name, 'app/scripts'],
            disableConsole: !this.console
        });
    }
};