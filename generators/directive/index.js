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
            desc: '[Directive name]'
        });

        this.option('disableConsole', {
            desc: 'Disable yosay console (default: false)'
        });

        this.name = this.options.name || 'none';
        this.console = !this.options.disableConsole;

        this.varname = camelize(this.name);
        this.directivename = this.varname + 'Directive';
        this.htmlname = "data-" + decamelize(camelize(this.varname)).replace("_", "-"); 
        this.file = decamelize(camelize(this.directivename)) + '.js';
        this.filetest = decamelize(camelize(this.directivename)) + '_test.js';

        this.projectModule = this.config.get('projectModule');
        this.license = this.config.get('license');
    }

    prompting() {
        var text = 'Making the directive ' + chalk.blue(this.name);
        this.log(this.console ? yosay(text) : text);
    }

    writing() {
        this._writingDirective();
        this._writingTest();
    }

    _writingDirective() {
        this.fs.copyTpl(
            this.templatePath('directive.js'),
            this.destinationPath('app/scripts/directives/' + this.file), {
                varname: this.varname,
                name: this.directivename,
                htmlname: this.htmlname,
                projectModule: this.projectModule,
                license: this.license
            }
        );
    }

    _writingTest() {
        this.fs.copyTpl(
            this.templatePath('directive_test.js'),
            this.destinationPath('test/spec/directives/' + this.filetest), {
                varname: this.varname,
                name: this.directivename,
                htmlname: this.htmlname,
                projectModule: this.projectModule,
                license: this.license
            }
        );
    }
};
