'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:value', () => {
    describe('Check disableConsole', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/value'))
                .withArguments(['excel'])
                .withOptions({
                    disableConsole: true
                })
                .on('end', done);
        });

        it('should value file contain name', () => {
            assert.fileContent('app/scripts/services/excel_value.js', ".value('excel',");
        });

    });
});