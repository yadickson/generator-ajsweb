'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('componentname', {
            type: String,
            required: true,
            desc: '[Component name]'
        });

        this.option('disableConsole', {
            desc: 'Disable yosay console (default: false)'
        });

        this.name = this.options.componentname;
        this.console = !this.options.disableConsole;
    }

    install() {
        this.composeWith(require.resolve('generator-ajsbase/generators/component'), {
            arguments: [this.name, 'app/scripts'],
            disableConsole: !this.console
        });
    }
};