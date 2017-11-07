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
            desc: '[Service name]'
        });

        this.option('disableConsole', {
            desc: 'Disable yosay console (default: false)'
        });

        this.name = this.options.name || 'none';
        this.console = !this.options.disableConsole;

        this.varname = camelize(this.name);
        this.servicename = this.varname + 'Service';
        this.file = decamelize(camelize(this.servicename)) + '.js';
        this.filetest = decamelize(camelize(this.servicename)) + '_test.js';

        this.projectModule = this.config.get('projectModule');
        this.license = this.config.get('license');
    }

    prompting() {
        var text = 'Making the service ' + chalk.blue(this.name);
        this.log(this.console ? yosay(text) : text);
    }

    writing() {
        this._writingService();
        this._writingTest();
    }

    _writingService() {
        this.fs.copyTpl(
            this.templatePath('service.js'),
            this.destinationPath('app/scripts/services/' + this.file), {
                varname: this.varname,
                name: this.servicename,
                projectModule: this.projectModule,
                license: this.license
            }
        );
    }

    _writingTest() {
        this.fs.copyTpl(
            this.templatePath('service_test.js'),
            this.destinationPath('test/spec/services/' + this.filetest), {
                varname: this.varname,
                name: this.servicename,
                projectModule: this.projectModule,
                license: this.license
            }
        );
    }
};
