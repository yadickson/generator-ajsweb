'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const commandExists = require('command-exists').sync;
const camelize = require('camelize')
const pkg = require('package-json-utils');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('appname', {
            type: String,
            required: false,
            desc: '[Project application name]'
        });

        this.option('disableBootstrap', {
            desc: 'Disable bootstrap (default: false)'
        });

        this.option('disableConsole', {
            desc: 'Disable yosay console (default: false)'
        });

        this.option('disableSass', {
            desc: 'Enable sass (default: false)'
        });

        this.includeSass = !this.options.disableSass;
        this.includeBootstrap = !this.options.disableBootstrap;
        this.console = !this.options.disableConsole;
        this.appname = this.options.appname || this.appname;
    }

    initializing() {
        this.pkg = require('../../package.json');
    }

    prompting() {
        var text = 'Welcome to the ' + chalk.red('Angular-JS') + ' generator!';
        this.log(this.console ? yosay(text) : text);

        const prompts = [{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: pkg.getProjectName() || this.appname
        }, {
            type: 'input',
            name: 'description',
            message: 'Description',
            default: pkg.getDescription()
        }, {
            type: 'input',
            name: 'author',
            message: 'Author',
            default: pkg.getAuthor()
        }, {
            type: 'input',
            name: 'email',
            message: 'Email',
            default: pkg.getEmail()
        }, {
            type: 'input',
            name: 'license',
            message: 'License',
            default: pkg.getLicense()
        }, {
            type: 'input',
            name: 'username',
            message: 'What\'s your GitHub username',
            default: pkg.getUsername()
        }];

        return this.prompt(prompts).then(props => {

            this.name = props.name;
            this.description = props.description;
            this.author = props.author;
            this.email = props.email;
            this.license = props.license;
            this.username = props.username;

            this.modulename = camelize(pkg.getProjectName() || 'app') + 'Module';
        });
    }

    writing() {
        this._writingReadme();
        this._writeGulpfile();
        this._writingPackageJSON();
        this._writingGitIgnore();
        this._writingKarmaConfig();
        this._writingTravisConfig();
        this._writingIcon();
        this._writingImages();
        this._writingScripts();
        this._writingViews();
        this._writingStyles();
        this._writingFonts();
        this._writingTest();
    }

    _writingReadme() {
        this.fs.copyTpl(
            this.templatePath('_README.md'),
            this.destinationPath('README.md'), {
                name: this.name,
                description: this.description,
                author: this.author,
                license: this.license,
                username: this.username
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
                author: this.author,
                email: this.email,
                license: this.license,
                includeSass: this.includeSass,
                includeBootstrap: this.includeBootstrap
            }
        );
    }

    _writingGitIgnore() {
        this.fs.copy(
            this.templatePath('_gitignore'),
            this.destinationPath('.gitignore')
        );
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
            this.destinationPath('.travis.yml')
        );
    }

    _writingIcon() {
        this.fs.copy(
            this.templatePath('app/favicon.ico'),
            this.destinationPath('app/favicon.ico')
        );
    }

    _writingImages() {
        this.fs.copy(
            this.templatePath('app/images/image.png'),
            this.destinationPath('app/images/image.png')
        );
    }

    _writingScripts() {
        this.fs.copyTpl(
            this.templatePath('app/scripts/**/*.js'),
            this.destinationPath('app/scripts/'), {
                name: this.name,
                modulename: this.modulename,
                version: this.version,
                description: this.description,
                author: this.author,
                email: this.email,
                license: this.license
            }
        );
    }

    _writingViews() {
        this.fs.copyTpl(
            this.templatePath('app/**/*.html'),
            this.destinationPath('app/'), {
                name: this.name,
                modulename: this.modulename,
                version: this.version,
                description: this.description,
                author: this.author,
                email: this.email,
                license: this.license,
                includeSass: this.includeSass,
                includeBootstrap: this.includeBootstrap
            }
        );
    }

    _writingStyles() {
        this.fs.copy(
            this.templatePath('app/styles/*'),
            this.destinationPath('app/styles/')
        );
    }

    _writingFonts() {
        this.fs.copy(
            this.templatePath('app/fonts/*'),
            this.destinationPath('app/fonts/')
        );
    }

    _writingTest() {
        this.fs.copyTpl(
            this.templatePath('test/**/*'),
            this.destinationPath('test/'), {
                name: this.name,
                modulename: this.modulename,
                version: this.version,
                description: this.description,
                author: this.author,
                email: this.email,
                license: this.license
            }
        );
    }

    _addRoute() {

        this.composeWith(require.resolve('../route'), {
            arguments: ['home', 'This is one Gulp Angular JS Application'],
            addImage: true,
            addHelp: true,
            disableConsole: true
        });

    }

    install() {
        const hasYarn = commandExists('yarn');

        this.installDependencies({
            npm: !hasYarn,
            bower: false,
            yarn: hasYarn
        });

        this._addRoute();

        var text = 'Run ' + chalk.red('gulp serve') + ' to start web application';
        this.log(this.console ? yosay(text) : text);

    }
};