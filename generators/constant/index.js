'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const camelize = require('camelize');
const decamelize = require('decamelize');
const upperCase = require('upper-case')

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('name', {
            type: String,
            required: true,
            desc: '[Constant name]'
        });

        this.option('disableConsole', {
            desc: 'Disable yosay console (default: false)'
        });

        this.name = this.options.name || 'none';
        this.console = !this.options.disableConsole;

        this.varname = camelize(this.name);
        this.const = this.varname + "Const";
        this.constname = upperCase(decamelize(camelize(this.const)));

        this.file = decamelize(camelize(this.const)) + '.js';
        this.filetest = decamelize(camelize(this.const)) + '_test.js';

        this.projectModule = this.config.get('projectModule');
        this.license = this.config.get('license');
    }

    prompting() {
        var text = 'Making the constant ' + chalk.blue(this.name);
        this.log(this.console ? yosay(text) : text);
    }

    writing() {
        this._writingConstant();
        this._writingTest();
    }

    _writingConstant() {
        this.fs.copyTpl(
            this.templatePath('constant.js'),
            this.destinationPath('app/scripts/services/' + this.file), {
                varname: this.varname,
                name: this.constname,
                projectModule: this.projectModule,
                license: this.license
            }
        );
    }

    _writingTest() {
        this.fs.copyTpl(
            this.templatePath('constant_test.js'),
            this.destinationPath('test/spec/services/' + this.filetest), {
                varname: this.varname,
                name: this.constname,
                projectModule: this.projectModule,
                license: this.license
            }
        );
    }
};
