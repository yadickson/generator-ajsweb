'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:decorator', () => {
    describe('Check decorator info', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/decorator'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('should decorator file contain name', () => {
            assert.fileContent('app/scripts/decorators/numeric_decorator.js', ".decorator('numeric',");
        });
    });

});