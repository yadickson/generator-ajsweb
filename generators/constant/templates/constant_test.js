(function() {
    'use strict';

    describe('Constant:<%= name %>', function() {
        describe('Test module and constant', function() {

            // load the controller's module
            beforeEach(angular.mock.module('<%= projectModule %>'));

            var <%= varname %>;
            // Initialize the controller and a mock scope
            beforeEach(inject(function(_<%= name %>_) {
                <%= varname %> = _<%= name %>_;
            }));

            it('Check value', function() {
                expect(<%= varname %>).to.be.equal('<%= name %>');
            });
        });
    });
})();