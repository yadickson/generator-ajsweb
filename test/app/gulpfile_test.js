'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:app', () => {
    describe('Check gulpfile.js minimal', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/app'))
                .withOptions({
                    disableSass: true,
                    disableBootstrap: true
                })
                .withPrompts({})
                .on('end', done);
        });

        it('should gulpfile not contain bootstrap enabled', () => {
            assert.fileContent('gulpfile.js', 'let bootstrap = false;');
        });

        it('should gulpfile not contain sass enabled', () => {
            assert.fileContent('gulpfile.js', 'let sass = false;');
        });
    });

    describe('Check gulpfile.js with bootstrap', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/app'))
                .withOptions({
                    disableSass: true,
                    disableBootstrap: false
                })
                .withPrompts({})
                .on('end', done);
        });

        it('should gulpfile contain bootstrap enabled', () => {
            assert.fileContent('gulpfile.js', 'let bootstrap = true;');
        });

        it('should gulpfile not contain sass enabled', () => {
            assert.fileContent('gulpfile.js', 'let sass = false;');
        });
    });

    describe('Check gulpfile.js with sass', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/app'))
                .withOptions({
                    disableSass: false,
                    disableBootstrap: true
                })
                .withPrompts({})
                .on('end', done);
        });

        it('should gulpfile no contain bootstrap enabled', () => {
            assert.noFileContent('gulpfile.js', 'let bootstrap = true;');
        });

        it('should gulpfile contain sass enabled', () => {
            assert.fileContent('gulpfile.js', 'let sass = true;');
        });
    });

});
