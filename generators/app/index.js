'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');
const commandExists = require('command-exists').sync;
const camelize = require('camelize')

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('appname', {
            type: String,
            required: false
        });

        this.appname = this.options.appname || this.appname;
    }

    initializing() {
        this.pkg = require('../../package.json');
    }

    prompting() {
        this.log(yosay('Welcome to the ' + chalk.red('Angular-JS') + ' generator!'));

        const prompts = [{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname
        }, {
            type: 'input',
            name: 'version',
            message: 'Version',
            default: '0.0.0'
        }, {
            type: 'input',
            name: 'description',
            message: 'Description',
            default: answers => 'Description of ' + answers.name
        }, {
            type: 'input',
            name: 'author',
            message: 'Author',
            default: answers => 'Author of ' + answers.name
        }, {
            type: 'input',
            name: 'email',
            message: 'Email',
            default: answers => 'Email of ' + answers.author
        }, {
            type: 'input',
            name: 'license',
            message: 'License',
            default: 'GPL-3.0'
        }, {
            type: 'input',
            name: 'username',
            message: 'What\'s your GitHub username',
            default: ''
        }, {
            type: 'confirm',
            name: 'includeBootstrap',
            message: 'Would you like to include Bootstrap?'
        }, {
            when: answers => answers.includeBootstrap === true,
            type: 'confirm',
            name: 'includeSass',
            message: 'Would you like to include Sass?'
        }];

        return this.prompt(prompts).then(props => {

            this.name = props.name;
            this.version = props.version;
            this.description = props.description;
            this.author = props.author;
            this.email = props.email;
            this.license = props.license;
            this.username = props.username;
            this.includeBootstrap = props.includeBootstrap;
            this.includeSass = props.includeSass || false;

            this.projectModule = camelize(this.name) + "Module";

            this.config.set('name', this.name);
            this.config.set('projectModule', this.projectModule);
            this.config.set('version', this.version);
            this.config.set('description', this.description);
            this.config.set('author', this.author);
            this.config.set('email', this.email);
            this.config.set('license', this.license);
            this.config.set('username', this.username);
            this.config.set('includeBootstrap', this.includeBootstrap);
            this.config.set('includeSass', this.includeSass);

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
        this._writingIndex();
        this._writingStyles();
        this._writingTest();
 
        this.composeWith(require.resolve('../controller'), {
            arguments: ['home']
        });

        this.composeWith(require.resolve('../view'), {
            arguments: ['home', 'This is one Gulp Angular JS Application'],
            addImage: true,
            addHelp: true
        });
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
                projectModule: this.projectModule,
                version: this.version,
                description: this.description,
                author: this.author,
                email: this.email,
                license: this.license
            }
        );
    }

    _writingIndex() {
        this.fs.copyTpl(
            this.templatePath('app/*.html'),
            this.destinationPath('app/'), {
                name: this.name,
                projectModule: this.projectModule,
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

    _writingTest() {
        this.fs.copyTpl(
            this.templatePath('test/**/*'),
            this.destinationPath('test/'), {
                name: this.name,
                projectModule: this.projectModule,
                version: this.version,
                description: this.description,
                author: this.author,
                email: this.email,
                license: this.license
            }
        );
    }

    install() {
        const hasYarn = commandExists('yarn');
        this.installDependencies({
            npm: !hasYarn,
            bower: false,
            yarn: hasYarn
        });

        this.log(
            yosay(
                'Run ' + chalk.red('gulp serve') + ' to start web application'
            )
        );

    }
};