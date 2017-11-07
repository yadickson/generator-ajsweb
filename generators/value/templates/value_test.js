(function() {
    'use strict';

    describe('Value:<%= varname %>', function() {
        describe('Test module and value', function() {

            // load the module
            beforeEach(angular.mock.module('<%= projectModule %>'));

            var <%= name %>;
            // Initialize the service
            beforeEach(inject(function(_<%= varname %>_) {
                <%= name %> = _<%= varname %>_;
            }));

            it('Check value', function() {
                expect(<%= name %>).to.be.equal('<%= name %>');
            });
        });
    });
})();
