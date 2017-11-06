'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-angularng:app', () => {
    describe('on', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/app'))
                .withOptions({
                    'appname': 'app'
                })
                .withPrompts({})
                .on('end', done);
        });

        it('creates files', () => {
            assert.file(['gulpfile.js']);
            assert.file(['package.json']);
        });
    });
});