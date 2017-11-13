'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('factoryname', {
            type: String,
            required: true,
            desc: '[Factory name]'
        });

        this.option('disableConsole', {
            desc: 'Disable yosay console (default: false)'
        });

        this.name = this.options.factoryname;
        this.console = !this.options.disableConsole;
    }

    install() {
        this.composeWith(require.resolve('generator-ajsbase/generators/factory'), {
            arguments: [this.name, 'app/scripts'],
            disableConsole: !this.console
        });
    }
};