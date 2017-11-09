'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajsweb:component', () => {
    describe('Check component info', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/component'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('should component file contain name', () => {
            assert.fileContent('app/scripts/components/numeric_component.js', ".component('numeric',");
        });
    });

});