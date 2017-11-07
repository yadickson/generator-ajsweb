'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const camelize = require('camelize');
const decamelize = require('decamelize');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('name', {
            type: String,
            required: true,
            desc: '[Provider name]'
        });

        this.option('disableConsole', {
            desc: 'Disable yosay console (default: false)'
        });

        this.name = this.options.name || 'none';
        this.console = !this.options.disableConsole;

        this.varname = camelize(this.name);
        this.providername = this.varname + 'Provider';
        this.file = decamelize(camelize(this.providername)) + '.js';
        this.filetest = decamelize(camelize(this.providername)) + '_test.js';

        this.projectModule = this.config.get('projectModule');
        this.license = this.config.get('license');
    }

    prompting() {
        var text = 'Making the provider ' + chalk.blue(this.name);
        this.log(this.console ? yosay(text) : text);
    }

    writing() {
        this._writingProvider();
        this._writingTest();
    }

    _writingProvider() {
        this.fs.copyTpl(
            this.templatePath('provider.js'),
            this.destinationPath('app/scripts/services/' + this.file), {
                varname: this.varname,
                name: this.providername,
                projectModule: this.projectModule,
                license: this.license
            }
        );
    }

    _writingTest() {
        this.fs.copyTpl(
            this.templatePath('provider_test.js'),
            this.destinationPath('test/spec/services/' + this.filetest), {
                varname: this.varname,
                name: this.providername,
                projectModule: this.projectModule,
                license: this.license
            }
        );
    }
};
