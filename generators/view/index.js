'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const camelize = require('camelize')
const decamelize = require('decamelize');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('name', {
            type: String,
            required: true
        });

        this.argument('description', {
            type: String,
            required: false
        });

        this.option('addImage');
        this.option('addHelp');

        this.name = this.options.name;
        this.addImage = this.options.addImage;
        this.addHelp = this.options.addHelp;
        this.description = this.options.description || 'This is the view ' + this.name + '.';
        this.file = decamelize(camelize(this.name)) + '.html';
    }

    prompting() {
        this.log(yosay('Making the view ' + chalk.blue(this.name)));
    }

    writing() {
        this._writingView();
    }

    _writingView() {
        this.fs.copyTpl(
            this.templatePath('view.html'),
            this.destinationPath('app/views/' + this.file), {
                addImage: this.addImage,
                addHelp: this.addHelp,
                description: this.description
            }
        );
    }
};
