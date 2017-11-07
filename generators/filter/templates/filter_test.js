  (function() {
      'use strict';

      describe('Filter:<%= varname %>', function() {
          describe('Test module and filter', function() {

              // load the module
              beforeEach(angular.mock.module('<%= projectModule %>'));

              var <%= name %>;
              // initialize a new instance of the filter before each test
              beforeEach(inject(function($filter) {
                  <%= name %> = $filter('<%= varname %>');
              }));

              it('should return the input prefixed with "<%= varname %> filter:"', inject(function() {
                  var text = 'Hello World';
                  expect(<%= name %>(text)).to.be.equal('<%= varname %> filter: ' + text);
              }));
          });
      });
  })();