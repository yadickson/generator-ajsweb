'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-angularng:app', () => {
    describe('Only Sass', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/app'))
                .withPrompts({
                    includeBootstrap: true,
                    includeSass: true
                })
                .on('end', done);
        });

        it('creates files', () => {
            assert.file(['gulpfile.js']);
            assert.file(['package.json']);
        });
    });
});