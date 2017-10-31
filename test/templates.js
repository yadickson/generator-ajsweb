'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-angularng:app', () => {
    describe('Create template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../app'))
                .withPrompts({})
                .on('end', done);
        });

        it('creates gulpfile.js', () => {
            assert.file(['gulpfile.js']);
        });

        it('creates package.json', () => {
            assert.file(['package.json']);
        });
    });
});