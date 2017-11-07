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
            desc: '[Decorator name]'
        });

        this.name = this.options.name || 'none';
        this.console = !this.options.disableConsole;

        this.varname = camelize(this.name);
        this.decoratorname = this.varname + 'Decorator';
        this.file = decamelize(camelize(this.decoratorname)) + '.js';
        this.filetest = decamelize(camelize(this.decoratorname)) + '_test.js';

        this.projectModule = this.config.get('projectModule');
        this.license = this.config.get('license');
    }

    prompting() {
        var text = 'Making the decorator ' + chalk.blue(this.name);
        this.log(this.console ? yosay(text) : text);
    }

    writing() {
        this._writingDecorator();
        this._writingTest();
    }

    _writingDecorator() {
        this.fs.copyTpl(
            this.templatePath('decorator.js'),
            this.destinationPath('app/scripts/decorators/' + this.file), {
                varname: this.varname,
                name: this.decoratorname,
                projectModule: this.projectModule,
                license: this.license
            }
        );
    }

    _writingTest() {
        this.fs.copyTpl(
            this.templatePath('decorator_test.js'),
            this.destinationPath('test/spec/decorators/' + this.filetest), {
                varname: this.varname,
                name: this.decoratorname,
                projectModule: this.projectModule,
                license: this.license
            }
        );
    }
};
