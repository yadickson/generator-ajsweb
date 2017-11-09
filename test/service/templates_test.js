'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:service', () => {
    describe('Create template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/service'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('creates app/scripts/services/numeric_service.js', () => {
            assert.file(['app/scripts/services/numeric_service.js']);
        });

        it('creates test/spec/services/numeric_service_test.js', () => {
            assert.file(['test/spec/services/numeric_service_test.js']);
        });
    });
});