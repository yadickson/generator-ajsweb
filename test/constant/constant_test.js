'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:constant', () => {
    describe('Check constant info', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/constant'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('should constant file contain name', () => {
            assert.fileContent('app/scripts/services/numeric_const.js', ".constant('numeric',");
        });
    });

});