'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const fs = require('file-system');
const format = require("string-template")
const uppercamelcase = require('uppercamelcase');
const camelize = require('camelize');
const decamelize = require('decamelize');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('name', {
            type: String,
            required: true,
            desc: '[Component name]'
        });

        this.option('disableConsole', {
            desc: 'Disable yosay console (default: false)'
        });

        this.name = this.options.name || 'none';
        this.description = "Template for " + this.name;
        this.console = !this.options.disableConsole;

        this.varname = camelize(this.name);
        this.componentname = this.varname + "Component";
        this.ctrlname = uppercamelcase(this.name) + 'Ctrl';
        this.template = decamelize(camelize(this.name)) + '.html';

        this.file = decamelize(camelize(this.componentname)) + '.js';
        this.filetest = decamelize(camelize(this.componentname)) + '_test.js';

        this.projectModule = this.config.get('projectModule');
        this.license = this.config.get('license');
    }

    prompting() {
        var text = 'Making the component ' + chalk.blue(this.name);
        this.log(this.console ? yosay(text) : text);
    }

    writing() {
        this._writingComponent();
        this._writingTest();
    }

    _writingComponent() {
        this.fs.copyTpl(
            this.templatePath('component.js'),
            this.destinationPath('app/scripts/components/' + this.file), {
                varname: this.varname,
                name: this.componentname,
                ctrlname: this.ctrlname,
                template: this.template,
                projectModule: this.projectModule,
                license: this.license
            }
        );
    }

    _writingTest() {
        this.fs.copyTpl(
            this.templatePath('component_test.js'),
            this.destinationPath('test/spec/components/' + this.filetest), {
                varname: this.varname,
                name: this.componentname,
                ctrlname: this.ctrlname,
                template: this.template,
                projectModule: this.projectModule,
                license: this.license
            }
        );
    }

};