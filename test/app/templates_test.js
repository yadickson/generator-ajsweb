'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:app', () => {
    describe('Create root template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/app'))
                .withPrompts({})
                .on('end', done);
        });

        it('creates gulpfile.js', () => {
            assert.file(['gulpfile.js']);
        });

        it('creates package.json', () => {
            assert.file(['package.json']);
        });

        it('creates README.md', () => {
            assert.file(['README.md']);
        });

        it('creates karma.conf.js', () => {
            assert.file(['karma.conf.js']);
        });

        it('creates .gitignore', () => {
            assert.file(['.gitignore']);
        });

        it('creates .travis.yml', () => {
            assert.file(['.travis.yml']);
        });
    });

    describe('Create app template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/app'))
                .withPrompts({})
                .on('end', done);
        });

        it('creates app/fonts/README', () => {
            assert.file(['app/fonts/README']);
        });

        it('creates app/images/image.png', () => {
            assert.file(['app/images/image.png']);
        });

        it('creates app/scripts/main.js', () => {
            assert.file(['app/scripts/main.js']);
        });

        it('creates app/scripts/main_cfg.js', () => {
            assert.file(['app/scripts/main_cfg.js']);
        });

        it('creates app/styles/README', () => {
            assert.file(['app/styles/README']);
        });

        it('creates app/index.html', () => {
            assert.file(['app/index.html']);
        });

        it('creates app/favicon.ico', () => {
            assert.file(['app/favicon.ico']);
        });
    });

    describe('Create test template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/app'))
                .withPrompts({})
                .on('end', done);
        });

        it('creates test/test.html', () => {
            assert.file(['test/test.html']);
        });

        it('creates test/spec/main_test.js', () => {
            assert.file(['test/spec/main_test.js']);
        });
    });
});