'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-angularng:app', () => {
    describe('All features', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../app'))
                .withPrompts({
                    features: [
                        'includeSass',
                        'includeBootstrap'
                    ]
                })
                .on('end', done);
        });

        it('creates files', () => {
            assert.file(['gulpfile.js']);
            assert.file(['package.json']);
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