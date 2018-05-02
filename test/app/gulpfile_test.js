'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:app', () => {
    describe('Check gulpfile.js minimal', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/app'))
                .withOptions({})
                .withPrompts({})
                .on('end', done);
        });

        it('should gulpfile new format', () => {
            assert.fileContent('gulpfile.js', "let gulp = require('gulp-ajsweb')(require('gulp'), options);");
        });
    });
});
