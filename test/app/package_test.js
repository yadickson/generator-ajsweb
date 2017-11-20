'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:app', () => {
    describe('Check package.json info', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/app'))
                .withArguments(['app'])
                .withPrompts({
                    description: 'app description',
                    author: 'app author',
                    email: 'email@domain.com',
                    username: 'username'
                })
                .on('end', done);
        });

        it('should package contain name', () => {
            assert.fileContent('package.json', '"name": "app"');
        });

        it('should package contain description', () => {
            assert.fileContent('package.json', '"description": "app description"');
        });

        it('should package contain author name', () => {
            assert.fileContent('package.json', '"name": "app author"');
        });

        it('should package contain author email', () => {
            assert.fileContent('package.json', '"email": "email@domain.com"');
        });

        it('should package contain author url', () => {
            assert.fileContent('package.json', '"url": "https://github.com/username"');
        });
    });

    describe('Check package.json minimal', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/app'))
                .withOptions({
                    disableSass: true,
                    disableBootstrap: true
                })
                .withPrompts({})
                .on('end', done);
        });

        it('should contain bootstrap dependency', () => {
            assert.fileContent('package.json', '"bootstrap":');
        });

        it('should not contain sass dependency', () => {
            assert.noFileContent('package.json', '"bootstrap-sass":');
        });
    });

    describe('Check package.json with bootstrap', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/app'))
                .withOptions({
                    disableSass: true,
                    disableBootstrap: false
                })
                .withPrompts({})
                .on('end', done);
        });

        it('should contain bootstrap dependency', () => {
            assert.fileContent('package.json', '"bootstrap":');
        });

        it('should not contain sass dependency', () => {
            assert.noFileContent('package.json', '"bootstrap-sass":');
        });
    });

    describe('Check package.json with sass', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/app'))
                .withOptions({
                    disableSass: false,
                    disableBootstrap: true
                })
                .withPrompts({})
                .on('end', done);
        });

        it('should contain bootstrap dependency', () => {
            assert.fileContent('package.json', '"bootstrap":');
        });

        it('should not contain sass dependency', () => {
            assert.noFileContent('package.json', '"bootstrap-sass":');
        });
    });

});
