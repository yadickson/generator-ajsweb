'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:component', () => {
    describe('Create template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/component'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('creates app/scripts/components/numeric_component.js', () => {
            assert.file(['app/scripts/components/numeric_component.js']);
        });

        it('creates test/spec/components/numeric_component_test.js', () => {
            assert.file(['test/spec/components/numeric_component_test.js']);
        });
    });
});