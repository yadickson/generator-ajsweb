'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('filtername', {
            type: String,
            required: true,
            desc: '[Filter name]'
        });

        this.option('disableConsole', {
            desc: 'Disable yosay console (default: false)'
        });

        this.name = this.options.filtername;
        this.console = !this.options.disableConsole;
    }

    install() {
        this.composeWith(require.resolve('generator-ajsbase/generators/filter'), {
            arguments: [this.name, 'app/scripts'],
            disableConsole: !this.console
        });
    }
};