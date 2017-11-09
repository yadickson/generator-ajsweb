'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:provider', () => {
    describe('Check provider info', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/provider'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('should provider file contain name', () => {
            assert.fileContent('app/scripts/services/numeric_provider.js', ".provider('numeric',");
        });
    });

});