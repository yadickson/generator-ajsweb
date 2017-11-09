'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:filter', () => {
    describe('Create template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/filter'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('creates app/scripts/filters/numeric_filter.js', () => {
            assert.file(['app/scripts/filters/numeric_filter.js']);
        });

        it('creates test/spec/filters/numeric_filter_test.js', () => {
            assert.file(['test/spec/filters/numeric_filter_test.js']);
        });
    });
});