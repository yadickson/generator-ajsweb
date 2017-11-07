  (function() {
      'use strict';

      describe('Service:<%= name %>', function() {
          describe('Test module and service', function() {

              // load the module
              beforeEach(angular.mock.module('<%= projectModule %>'));

              var <%= name %>;
              // Initialize the service
              beforeEach(inject(function(_<%= name %>_) {
                  <%= name %> = _<%= name %>_;
              }));

              it('Check service <%= name %>', function() {
                  expect(!!<%= name %>).to.be.true;
              });

              it('Check <%= name %>.name', function() {
                  expect(<%= name %>.name).to.be.equal('<%= name %>');
              });
          });
      });
  })();
