'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:controller', () => {
    describe('Create template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/controller'))
                .withArguments(['calculator'])
                .on('end', done);
        });

        it('creates app/scripts/controllers/calculator_ctrl.js', () => {
            assert.file(['app/scripts/controllers/calculator_ctrl.js']);
        });

        it('creates test/spec/controllers/calculator_ctrl_test.js', () => {
            assert.file(['test/spec/controllers/calculator_ctrl_test.js']);
        });
    });
});