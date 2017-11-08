'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:controller', () => {
    describe('Check help', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/controller'))
                .withOptions({
                    'help': true
                })
                .withPrompts({})
                .on('end', done);
        });

        it('should controller file contain name', () => {
            assert.fileContent('app/scripts/controllers/none_ctrl.js', ".controller('NoneCtrl',");
        });
    });
});