'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:service', () => {
    describe('Check service info', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/service'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('should service file contain name', () => {
            assert.fileContent('app/scripts/services/numeric_service.js', ".service('numeric',");
        });
    });

});