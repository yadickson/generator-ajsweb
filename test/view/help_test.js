'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:view', () => {
    describe('Check help', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/view'))
                .withOptions({
                    'help': true
                })
                .withPrompts({})
                .on('end', done);
        });

        it('should view file is created', () => {
            assert.file(['app/views/none.html']);
        });
    });
});