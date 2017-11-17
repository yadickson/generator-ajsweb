'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const fs = require('file-system');
const format = require("string-template")
const uppercamelcase = require('uppercamelcase');
const camelize = require('camelize');
const decamelize = require('decamelize');
const stringJect = require('stringjector');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('name', {
            type: String,
            required: true,
            desc: '[Route name]'
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
        this.description = this.options.description || '';

        this.ctrlname = uppercamelcase(this.name) + 'Ctrl';
        this.file = decamelize(camelize(this.name)) + '.html';
    }

    prompting() {
        var text = 'Making the route ' + chalk.blue(this.name);
        this.log(this.console ? yosay(text) : text);
    }

    writing() {
        this._addRoute();
    }

    _addRoute() {

        var path = 'app/scripts/main.js';

        if (fs.existsSync(path) && fs.statSync(path).isFile()) {

            var buffer = fs.readFileSync(path).toString().replace(/\r?\n|\r/g," ");
            var skip = buffer.indexOf('state(\'' + this.name + '\',') >= 0;

            if (!skip) {

                var template = `                .state('{name}', {
                    parent: 'root',
                    url: '/{name}',
                    views: {
                        'main@': {
                            controller: '{ctrlname}',
                            templateUrl: 'views/{file}',
                            controllerAs: 'vm'
                        }
                    }
                })`;

                var route = format(template, {
                    name: this.name,
                    ctrlname: this.ctrlname,
                    file: this.file
                });

                new stringJect(path, '// endinject').before(route).saveSync();

            }

        } else {
            var text = 'The path file ' + chalk.red(path) + ' not found!';
            this.log(this.console ? yosay(text) : text);
        }

    }

    install() {
        this.composeWith(require.resolve('../controller'), {
            arguments: [this.name],
            disableConsole: !this.console
        });

        this.composeWith(require.resolve('../view'), {
            arguments: [this.name, this.description],
            addImage: this.addImage,
            addHelp: this.addHelp,
            disableConsole: !this.console
        });
    }

};