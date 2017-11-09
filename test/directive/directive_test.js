'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:directive', () => {
    describe('Check directive info', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/directive'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('should directive file contain name', () => {
            assert.fileContent('app/scripts/directives/numeric_directive.js', ".directive('numeric',");
        });
    });

});