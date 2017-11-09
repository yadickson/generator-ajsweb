'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:directive', () => {
    describe('Create template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/directive'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('creates app/scripts/directives/numeric_directive.js', () => {
            assert.file(['app/scripts/directives/numeric_directive.js']);
        });

        it('creates test/spec/directives/numeric_directive_test.js', () => {
            assert.file(['test/spec/directives/numeric_directive_test.js']);
        });
    });
});