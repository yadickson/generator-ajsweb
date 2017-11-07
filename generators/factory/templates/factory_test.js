  (function() {
      'use strict';

      describe('Factory:<%= name %>', function() {
          describe('Test module and factory', function() {

              // load the module
              beforeEach(angular.mock.module('<%= projectModule %>'));

              var <%= name %>;
              // Initialize the service
              beforeEach(inject(function(_<%= name %>_) {
                  <%= name %> = _<%= name %>_;
              }));

              it('Check factory <%= name %>', function() {
                  expect(!!<%= name %>).to.be.true;
              });

              it('Check <%= name %>.someMethod()', function() {
                  expect(<%= name %>.someMethod()).to.be.equal('<%= name %>');
              });
          });
      });
  })();
