'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-angularng:app', () => {
    describe('All features', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/app'))
                .withPrompts({
                    includeBootstrap: true,
                    includeSass: true
                })
                .on('end', done);
        });

        it('should contain necessary dependencies', () => {
            [
                'bootstrap',
                'bootstrap-sass',
                'gulp-sass'
            ]
            .forEach((task) => {
                assert.fileContent('package.json', '"' + task + '":');
            });
        });
    });
});