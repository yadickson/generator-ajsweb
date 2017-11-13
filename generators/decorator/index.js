'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('decoratorname', {
            type: String,
            required: true,
            desc: '[Decorator name]'
        });

        this.option('disableConsole', {
            desc: 'Disable yosay console (default: false)'
        });

        this.name = this.options.decoratorname;
        this.console = !this.options.disableConsole;
    }

    install() {
        this.composeWith(require.resolve('generator-ajsbase/generators/decorator'), {
            arguments: [this.name, 'app/scripts'],
            disableConsole: !this.console
        });
    }
};