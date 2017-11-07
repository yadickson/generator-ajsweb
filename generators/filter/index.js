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
            desc: '[Filter name]'
        });

        this.option('disableConsole', {
            desc: 'Disable yosay console (default: false)'
        });

        this.name = this.options.name || 'none';
        this.console = !this.options.disableConsole;

        this.varname = camelize(this.name);
        this.filtername = this.varname + 'Filter';
        this.file = decamelize(camelize(this.filtername)) + '.js';
        this.filetest = decamelize(camelize(this.filtername)) + '_test.js';

        this.projectModule = this.config.get('projectModule');
        this.license = this.config.get('license');
    }

    prompting() {
        var text = 'Making the filter ' + chalk.blue(this.name);
        this.log(this.console ? yosay(text) : text);
    }

    writing() {
        this._writingFilter();
        this._writingTest();
    }

    _writingFilter() {
        this.fs.copyTpl(
            this.templatePath('filter.js'),
            this.destinationPath('app/scripts/filters/' + this.file), {
                varname: this.varname,
                name: this.filtername,
                projectModule: this.projectModule,
                license: this.license
            }
        );
    }

    _writingTest() {
        this.fs.copyTpl(
            this.templatePath('filter_test.js'),
            this.destinationPath('test/spec/filters/' + this.filetest), {
                varname: this.varname,
                name: this.filtername,
                projectModule: this.projectModule,
                license: this.license
            }
        );
    }
};
