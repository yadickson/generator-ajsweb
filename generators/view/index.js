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
            desc: '[View name]'
        });

        this.argument('description', {
            type: String,
            required: false,
            desc: '[Description]'
        });

        this.option('addImage', {
            desc: 'Add image to view (default: false)'
        });

        this.option('addHelp', {
            desc: 'Add link to help page (default: false)'
        });

        this.option('disableConsole', {
            desc: 'Disable yosay console (default: false)'
        });

        this.name = this.options.name || 'none';
        this.addImage = this.options.addImage;
        this.addHelp = this.options.addHelp;
        this.console = !this.options.disableConsole;
        this.description = this.options.description !== undefined ? this.options.description : 'This is the view ' + this.name + '.';
        this.file = decamelize(camelize(this.name)) + '.html';
        this.includeBootstrap = this.config.get('includeBootstrap');
    }

    prompting() {
        var text = 'Making the view ' + chalk.blue(this.name);
        this.log(this.console ? yosay(text) : text);
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
                description: this.description,
                includeBootstrap: this.includeBootstrap
            }
        );
    }
};