'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:filter', () => {
    describe('Check filter info', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/filter'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('should filter file contain name', () => {
            assert.fileContent('app/scripts/filters/numeric_filter.js', ".filter('numeric',");
        });
    });

});