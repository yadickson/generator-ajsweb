'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('directivename', {
            type: String,
            required: true,
            desc: '[DIrective name]'
        });

        this.option('disableConsole', {
            desc: 'Disable yosay console (default: false)'
        });

        this.name = this.options.directivename;
        this.console = !this.options.disableConsole;
    }

    install() {
        this.composeWith(require.resolve('generator-ajsbase/generators/directive'), {
            arguments: [this.name, 'app/scripts'],
            disableConsole: !this.console
        });
    }
};