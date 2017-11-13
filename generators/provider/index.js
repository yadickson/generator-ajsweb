'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('providername', {
            type: String,
            required: true,
            desc: '[Provider name]'
        });

        this.option('disableConsole', {
            desc: 'Disable yosay console (default: false)'
        });

        this.name = this.options.providername;
        this.console = !this.options.disableConsole;
    }

    install() {
        this.composeWith(require.resolve('generator-ajsbase/generators/provider'), {
            arguments: [this.name, 'app/scripts'],
            disableConsole: !this.console
        });
    }
};