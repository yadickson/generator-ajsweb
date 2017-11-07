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
            desc: '[Factory name]'
        });

        this.option('disableConsole', {
            desc: 'Disable yosay console (default: false)'
        });

        this.name = this.options.name || 'none';
        this.console = !this.options.disableConsole;

        this.factoryname = camelize(this.name) + 'Factory';
        this.file = decamelize(camelize(this.factoryname)) + '.js';
        this.filetest = decamelize(camelize(this.factoryname)) + '_test.js';

        this.projectModule = this.config.get('projectModule');
        this.license = this.config.get('license');
    }

    prompting() {
        var text = 'Making the factory ' + chalk.blue(this.name);
        this.log(this.console ? yosay(text) : text);
    }

    writing() {
        this._writingValue();
        this._writingTest();
    }

    _writingValue() {
        this.fs.copyTpl(
            this.templatePath('factory.js'),
            this.destinationPath('app/scripts/services/' + this.file), {
                name: this.factoryname,
                projectModule: this.projectModule,
                license: this.license
            }
        );
    }

    _writingTest() {
        this.fs.copyTpl(
            this.templatePath('factory_test.js'),
            this.destinationPath('test/spec/services/' + this.filetest), {
                name: this.factoryname,
                projectModule: this.projectModule,
                license: this.license
            }
        );
    }
};
