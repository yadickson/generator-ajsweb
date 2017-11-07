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
        this.description = this.options.description;

        this.ctrlname = uppercamelcase(this.name) + 'Ctrl';
        this.file = decamelize(camelize(this.name)) + '.html';
    }

    prompting() {
        var text = 'Making the route ' + chalk.blue(this.name);
        this.log(this.console ? yosay(text) : text);
        this._addRoute();
    }

    writing() {
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

    _addRoute() {

        var path = 'app/scripts/main_cfg.js';

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

        if (fs.existsSync(path) && fs.statSync(path).isFile()) {
            var data = fs.readFileSync(path).toString().split("\n");
            var line = 0;
            var found = false;
            var name = this.name;

            data.forEach(function(item, index) {
                if (!found && item.includes('// endinject')) {
                    line = index;
                }
                if (!found) {
                    found = item.includes("url: '/" + name + "'")
                }
            });

            if (!found && line >= 0) {

                data.splice(line, 0, route);
                var text = data.join("\n");
                fs.writeFileSync(path, text, function(err) {
                    if (err) return this.log(err);
                });

            } else if (!found) {
                var text = 'Please add tags ' + chalk.red('// inject:string') + ' and ' + chalk.red('// endinject');
                this.log(this.console ? yosay(text) : text);
            } else {
                var text = 'Route ' + chalk.blue(name) + ' found';
                this.log(this.console ? yosay(text) : text);
            }
        } else {
            var text = 'The path file ' + chalk.red(path) + ' not found!';
            this.log(this.console ? yosay(text) : text);
        }

    }
};