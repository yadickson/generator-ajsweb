'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:directive', () => {
    describe('Check disableConsole', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/directive'))
                .withArguments(['dni'])
                .withOptions({
                    disableConsole: true
                })
                .on('end', done);
        });

        it('should directive file contain name', () => {
            assert.fileContent('app/scripts/directives/dni_directive.js', ".directive('dni',");
        });

    });
});