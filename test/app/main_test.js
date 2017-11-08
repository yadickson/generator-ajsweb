'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:app', () => {
    describe('Check main.js info', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/app'))
                .withArguments(['app'])
                .withPrompts({})
                .on('end', done);
        });

        it('should main contain name', () => {
            assert.fileContent('app/scripts/main.js', ".module('appModule', [");
        });

        it('should main contain ui.router', () => {
            assert.fileContent('app/scripts/main.js', "'ui.router'");
        });
    });

});