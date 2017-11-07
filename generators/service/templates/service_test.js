  (function() {
      'use strict';

      describe('Service:<%= name %>', function() {
          describe('Test module and service', function() {

              // load the controller's module
              beforeEach(angular.mock.module('<%= projectModule %>'));

              var <%= name %>;
              // Initialize the controller and a mock scope
              beforeEach(inject(function(_<%= name %>_) {
                  <%= name %> = _<%= name %>_;
              }));

              it('Check service', function() {
                  expect(!!<%= name %>).to.be.true;
              });

              it('Check service.name', function() {
                  expect(<%= name %>.name).to.be.equal('<%= name %>');
              });
          });
      });
  })();