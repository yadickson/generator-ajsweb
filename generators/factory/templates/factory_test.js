  (function() {
      'use strict';

      describe('Factory:<%= varname %>', function() {
          describe('Test module and factory', function() {

              // load the module
              beforeEach(angular.mock.module('<%= projectModule %>'));

              var <%= name %>;
              // Initialize the service
              beforeEach(inject(function(_<%= varname %>_) {
                  <%= name %> = _<%= varname %>_;
              }));

              it('Check factory <%= varname %>', function() {
                  expect(!!<%= name %>).to.be.true;
              });

              it('Check <%= varname %>.someMethod()', function() {
                  expect(<%= name %>.someMethod()).to.be.equal('<%= name %>');
              });
          });
      });
  })();
