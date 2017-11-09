  (function() {
      'use strict';

      describe('Provider:<%= varname %>', function() {
          describe('Test module and provider', function() {

              // instantiate provider
              var <%= varname %>,
                  initialize = function() {
                      inject(function(_<%= varname %>_) {
                          <%= varname %> = _<%= varname %>_;
                      });
                  };

              // load the module
              beforeEach(angular.mock.module('<%= projectModule %>'));

              it('Check provider <%= varname %>', function() {
                  initialize();
                  expect(!!<%= varname %>).to.be.true;
              });

              it('Check provider <%= varname %> default name', function() {
                  initialize();
                  expect(<%= varname %>.constructor()).to.be.equal('<%= name %>');
              });

              it('Check provider <%= varname %> change name', function() {
                  angular.mock.module(function (<%= name %>) {
                    <%= name %>.setName('Hello World');
                  });
                  initialize();
                  expect(<%= varname %>.constructor()).to.be.equal('Hello World');
              });
          });
      });
  })();
