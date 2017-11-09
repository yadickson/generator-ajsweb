'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:view', () => {
    describe('Check view info', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/view'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('should view file contain DOCTYPE', () => {
            assert.fileContent('app/views/numeric.html', "<!DOCTYPE html>");
        });

        it('should view file contain <html>', () => {
            assert.fileContent('app/views/numeric.html', "<html>");
        });

        it('should view file contain </html>', () => {
            assert.fileContent('app/views/numeric.html', "</html>");
        });

        it('should view file contain <head>', () => {
            assert.fileContent('app/views/numeric.html', "<head>");
        });

        it('should view file contain </head>', () => {
            assert.fileContent('app/views/numeric.html', "</head>");
        });

        it('should view file contain <body>', () => {
            assert.fileContent('app/views/numeric.html', "<body>");
        });

        it('should view file contain </body>', () => {
            assert.fileContent('app/views/numeric.html', "</body>");
        });

        it('should view file contain name', () => {
            assert.fileContent('app/views/numeric.html', "This is the view numeric");
        });
    });

});