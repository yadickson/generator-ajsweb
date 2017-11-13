'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('servicename', {
            type: String,
            required: true,
            desc: '[Service name]'
        });

        this.option('disableConsole', {
            desc: 'Disable yosay console (default: false)'
        });

        this.name = this.options.servicename;
        this.console = !this.options.disableConsole;
    }

    install() {
        this.composeWith(require.resolve('generator-ajsbase/generators/service'), {
            arguments: [this.name, 'app/scripts'],
            disableConsole: !this.console
        });
    }
};