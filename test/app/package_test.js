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
                    email: 'email@domain.com'
                })
                .on('end', done);
        });

        it('should package contain name', () => {
            assert.fileContent('package.json', '"name": "app"');
        });

        it('should package contain description', () => {
            assert.fileContent('package.json', '"description": "app description"');
        });

        it('should package contain author', () => {
            assert.fileContent('package.json', '"author": "app author <email@domain.com>"');
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

        it('should not contain bootstrap dependency', () => {
            assert.noFileContent('package.json', '"bootstrap":');
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

        it('should no contain bootstrap dependency', () => {
            assert.noFileContent('package.json', '"bootstrap":');
        });

        it('should contain sass dependency', () => {
            assert.fileContent('package.json', '"bootstrap-sass":');
        });
    });

});
