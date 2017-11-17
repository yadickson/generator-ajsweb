'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:route', () => {
    describe('Check disableConsole', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/route'))
                .withArguments(['help'])
                .withOptions({
                    disableConsole: true
                })
                .on('end', done);
        });

        it('should controller file is created', () => {
            assert.file(['app/scripts/controllers/help_ctrl.js']);
        });

        it('should controller test file is created', () => {
            assert.file(['test/spec/controllers/help_ctrl_test.js']);
        });

        it('should view file is created', () => {
            assert.file(['app/views/help.html']);
        });

    });
});