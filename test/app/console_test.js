'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:app', () => {
    describe('Check disableConsole', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/app'))
                .withOptions({
                    disableConsole: true
                })
                .on('end', done);
        });

        it('creates gulpfile.js with console disable', () => {
            assert.file(['gulpfile.js']);
        });

    });
});