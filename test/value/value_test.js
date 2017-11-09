'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:value', () => {
    describe('Check value info', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/value'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('should value file contain name', () => {
            assert.fileContent('app/scripts/services/numeric_value.js', ".value('numeric',");
        });
    });

});