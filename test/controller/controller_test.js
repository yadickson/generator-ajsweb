'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:controller', () => {
    describe('Check controller info', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/controller'))
                .withArguments(['calculator'])
                .on('end', done);
        });

        it('should controller file contain name', () => {
            assert.fileContent('app/scripts/controllers/calculator_ctrl.js', ".controller('CalculatorCtrl',");
        });
    });

});