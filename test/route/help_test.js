'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:view', () => {
    describe('Check disableConsole', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/route'))
                .withOptions({
                    'help': true
                })
                .withPrompts({})
                .on('end', done);
        });

        it('should controller file is created', () => {
            assert.file(['app/scripts/controllers/none_ctrl.js']);
        });

        it('should controller test file is created', () => {
            assert.file(['test/spec/controllers/none_ctrl_test.js']);
        });

        it('should view file is created', () => {
            assert.file(['app/views/none.html']);
        });

    });
});