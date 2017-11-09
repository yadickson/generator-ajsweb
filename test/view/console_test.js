'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:view', () => {
    describe('Check disableConsole', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/view'))
                .withArguments(['help'])
                .withOptions({
                    disableConsole: true
                })
                .on('end', done);
        });

        it('should view file is created', () => {
            assert.file(['app/views/help.html']);
        });

    });
});