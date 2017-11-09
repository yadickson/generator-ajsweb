'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:value', () => {
    describe('Check help', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/value'))
                .withOptions({
                    'help': true
                })
                .withPrompts({})
                .on('end', done);
        });

        it('should value file contain name', () => {
            assert.fileContent('app/scripts/services/none_value.js', ".value('none',");
        });
    });
});