'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    console.log('prompting - turbo');
  }

  writing() {
    console.log('writing - turbo');
  }
};