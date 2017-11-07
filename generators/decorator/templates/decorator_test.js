  (function() {
      'use strict';

      describe('Decorator:<%= varname %>', function() {
          describe('Test module and decorator', function() {

              // load the module
              beforeEach(angular.mock.module('<%= projectModule %>'));

              var <%= name %>;
              // Initialize the service
              beforeEach(inject(function(_<%= varname %>_) {
                  <%= name %> = _<%= varname %>_;
              }));


              it('Check <%= name %>.help()', function() {
                  expect(<%= name %>.help()).to.be.equal('<%= name %>');
              });

          });
      });
  })();
