  (function() {
      'use strict';

      describe('Service:<%= varname %>', function() {
          describe('Test module and service', function() {

              // load the module
              beforeEach(angular.mock.module('<%= projectModule %>'));

              var <%= name %>;
              // Initialize the service
              beforeEach(inject(function(_<%= varname %>_) {
                  <%= name %> = _<%= varname %>_;
              }));

              it('Check service <%= varname %>', function() {
                  expect(!!<%= name %>).to.be.true;
              });

              it('Check <%= varname %>.name', function() {
                  expect(<%= name %>.name).to.be.equal('<%= name %>');
              });
          });
      });
  })();
