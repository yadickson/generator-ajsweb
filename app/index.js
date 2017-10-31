'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');
const commandExists = require('command-exists').sync;

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);
    }

    initializing() {
        this.pkg = require('../package.json');
    }

    prompting() {
        this.log(
            yosay(
                'Welcome to the minimal ' + chalk.red('AngularNG') + ' generator!'
            )
        );

        const prompts = [{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname.replace(/\s+/g, '-')
        }, {
            type: 'input',
            name: 'version',
            message: 'Version',
            default: '0.0.0'
        }, {
            type: 'input',
            name: 'description',
            message: 'Description',
            default: ''
        }, {
            type: 'input',
            name: 'main',
            message: 'Main',
            default: ''
        }, {
            type: 'input',
            name: 'author',
            message: 'Author',
            default: ''
        }, {
            type: 'input',
            name: 'license',
            message: 'License',
            default: ''
        }, {
            type: 'checkbox',
            name: 'features',
            message: 'Which additional features would you like to include?',
            choices: [{
                name: 'Sass',
                value: 'includeSass',
                checked: true
            }, {
                name: 'Bootstrap',
                value: 'includeBootstrap',
                checked: true
            }]
        }];

        return this.prompt(prompts).then(props => {
            const features = props.features;
            const hasFeature = feat => features && features.indexOf(feat) !== -1;

            this.name = props.name;
            this.version = props.version;
            this.description = props.description;
            this.main = props.main;
            this.author = props.author;
            this.license = props.license;
            this.includeSass = hasFeature('includeSass');
            this.includeBootstrap = hasFeature('includeBootstrap');

        });
    }

    writing() {
        this._writingReadme();
        this._writeGulpfile();
        this._writingPackageJSON();
        this._writingGitIgnore();
        this._writingKarmaConfig();
        this._writingTravisConfig();
    }

    _writingReadme() {
        this.fs.copyTpl(
            this.templatePath('_README.md'),
            this.destinationPath('README.md'), {
                includeSass: this.includeSass,
                includeBootstrap: this.includeBootstrap
            }
        );
    }

    _writeGulpfile() {
        this.fs.copyTpl(
            this.templatePath('_gulpfile.js'),
            this.destinationPath('gulpfile.js'), {
                date: (new Date).toISOString().split('T')[0],
                name: this.pkg.name,
                version: this.pkg.version,
                includeSass: this.includeSass,
                includeBootstrap: this.includeBootstrap
            }
        );
    }

    _writingPackageJSON() {
        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'), {
                name: this.name,
                version: this.version,
                description: this.description,
                main: this.main,
                author: this.author,
                license: this.license,
                includeSass: this.includeSass,
                includeBootstrap: this.includeBootstrap
            }
        );
    }

    _writingGitIgnore() {
        this.fs.copy(
            this.templatePath('_gitignore'),
            this.destinationPath('.gitignore'));
    }

    _writingKarmaConfig() {
        this.fs.copy(
            this.templatePath('_karma.conf.js'),
            this.destinationPath('karma.conf.js')
        );
    }

    _writingTravisConfig() {
        this.fs.copy(
            this.templatePath('_travis.yml'),
            this.destinationPath('.travis.yml'));
    }

    install() {
        /*
                const hasYarn = commandExists('yarn');
                this.installDependencies({
                    npm: !hasYarn,
                    bower: false,
                    yarn: hasYarn
                });*/
    }
};