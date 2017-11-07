  (function() {
      'use strict';

      describe('Factory:<%= name %>', function() {
          describe('Test module and service', function() {

              // load the controller's module
              beforeEach(angular.mock.module('<%= projectModule %>'));

              var <%= name %>;
              // Initialize the controller and a mock scope
              beforeEach(inject(function(_<%= name %>_) {
                  <%= name %> = _<%= name %>_;
              }));

              it('Check factory', function() {
                  expect(!!<%= name %>).to.be.true;
              });

              it('Check factory.someMethod()', function() {
                  expect(<%= name %>.someMethod()).to.be.equal('<%= name %>');
              });
          });
      });
  })();