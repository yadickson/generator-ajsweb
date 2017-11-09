'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:controller', () => {
    describe('Check disableConsole', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/controller'))
                .withArguments(['register'])
                .withOptions({
                    disableConsole: true
                })
                .on('end', done);
        });

        it('should controller file contain name', () => {
            assert.fileContent('app/scripts/controllers/register_ctrl.js', ".controller('RegisterCtrl',");
        });

    });
});