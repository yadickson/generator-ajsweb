'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:value', () => {
    describe('Create template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/value'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('creates app/scripts/services/numeric_value.js', () => {
            assert.file(['app/scripts/services/numeric_value.js']);
        });

        it('creates test/spec/services/numeric_value_test.js', () => {
            assert.file(['test/spec/services/numeric_value_test.js']);
        });
    });
});