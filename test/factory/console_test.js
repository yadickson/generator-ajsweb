'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:factory', () => {
    describe('Check disableConsole', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/factory'))
                .withArguments(['excel'])
                .withOptions({
                    disableConsole: true
                })
                .on('end', done);
        });

        it('should factory file contain name', () => {
            assert.fileContent('app/scripts/services/excel_factory.js', ".factory('excel',");
        });

    });
});