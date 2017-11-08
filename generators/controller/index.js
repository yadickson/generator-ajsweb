'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const uppercamelcase = require('uppercamelcase');
const decamelize = require('decamelize');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('ctrlname', {
            type: String,
            required: true,
            desc: '[Controller name]'
        });

        this.option('disableConsole', {
            desc: 'Disable yosay console (default: false)'
        });

        this.name = this.options.ctrlname || 'none';
        this.console = !this.options.disableConsole;

        this.ctrlname = uppercamelcase(this.name) + 'Ctrl';
        this.file = decamelize(this.ctrlname) + '.js';
        this.filetest = decamelize(this.ctrlname) + '_test.js';

        this.projectModule = this.config.get('projectModule');
        this.license = this.config.get('license');
    }

    prompting() {
        var text = 'Making the controller ' + chalk.blue(this.name);
        this.log(this.console ? yosay(text) : text);
    }

    writing() {
        this._writingController();
        this._writingTest();
    }

    _writingController() {
        this.fs.copyTpl(
            this.templatePath('controller.js'),
            this.destinationPath('app/scripts/controllers/' + this.file), {
                name: this.ctrlname,
                projectModule: this.projectModule,
                license: this.license
            }
        );
    }

    _writingTest() {
        this.fs.copyTpl(
            this.templatePath('controller_test.js'),
            this.destinationPath('test/spec/controllers/' + this.filetest), {
                name: this.ctrlname,
                projectModule: this.projectModule,
                license: this.license
            }
        );
    }
};