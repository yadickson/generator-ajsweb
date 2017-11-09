'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:factory', () => {
    describe('Check factory info', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/factory'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('should factory file contain name', () => {
            assert.fileContent('app/scripts/services/numeric_factory.js', ".factory('numeric',");
        });
    });

});