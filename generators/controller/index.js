'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const uppercamelcase = require('uppercamelcase')
const decamelize = require('decamelize');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('name', {
            type: String,
            required: true
        });

        this.name = this.options.name;
        this.ctrlname = uppercamelcase(this.name) + 'Ctrl';
        this.file = decamelize(this.ctrlname) + '.js';
        this.filetest = decamelize(this.ctrlname) + '_test.js';

        this.projectModule = this.config.get('projectModule');
        this.license = this.config.get('license');
    }

    prompting() {
        this.log(yosay('Making the controller ' + chalk.blue(this.name)));
    }

    writing() {
        this._writingScript();
        this._writingTest();
    }

    _writingScript() {
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