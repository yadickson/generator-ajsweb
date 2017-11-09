'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:view', () => {
    describe('Create template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/view'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('should view file is created', () => {
            assert.file(['app/views/numeric.html']);
        });
    });
});