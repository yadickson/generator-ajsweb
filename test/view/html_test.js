'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:view', () => {
    describe('Check description', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/view'))
                .withArguments(['help'])
                .withOptions({
                    description: 'Help AngularJS'
                })
                .on('end', done);
        });

        it('should view file contain description', () => {
            assert.fileContent('app/views/help.html', "Help AngularJS");
        });

        it('should view file not contain image', () => {
            assert.noFileContent('app/views/help.html', "<img src='resource/image.png' alt='' />");
        });

        it('should view file not contain url', () => {
            assert.noFileContent('app/views/help.html', "<a href='https://github.com/yadickson/generator-ajsweb#readme'>See AngularNG Generator Help</a>");
        });

    });

    describe('Check image', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/view'))
                .withArguments(['help'])
                .withOptions({
                    addImage: true
                })
                .on('end', done);
        });

        it('should view file contain default description', () => {
            assert.fileContent('app/views/help.html', "This is the view help");
        });

        it('should view file contain image', () => {
            assert.fileContent('app/views/help.html', "<img src='resource/image.png' alt='' />");
        });

        it('should view file not contain help', () => {
            assert.noFileContent('app/views/help.html', "<a href='https://github.com/yadickson/generator-ajsweb#readme'>See AngularJS Web Generator Help</a>");
        });

    });

    describe('Check url', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/view'))
                .withArguments(['help'])
                .withOptions({
                    addHelp: true
                })
                .on('end', done);
        });

        it('should view file contain default description', () => {
            assert.fileContent('app/views/help.html', "This is the view help");
        });

        it('should view file not contain image', () => {
            assert.noFileContent('app/views/help.html', "<img src='resource/image.png' alt='' />");
        });

        it('should view no file contain help', () => {
            assert.fileContent('app/views/help.html', "<a href='https://github.com/yadickson/generator-ajsweb#readme'>See AngularJS Web Generator Help</a>");
        });

    });
});
