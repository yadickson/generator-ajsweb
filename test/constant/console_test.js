'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:constant', () => {
    describe('Check disableConsole', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/constant'))
                .withArguments(['url-app'])
                .withOptions({
                    disableConsole: true
                })
                .on('end', done);
        });

        it('should constant file contain name', () => {
            assert.fileContent('app/scripts/services/url_app_const.js', ".constant('urlApp',");
        });

    });
});