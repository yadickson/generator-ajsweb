(function() {
    'use strict';

    describe('Value:<%= name %>', function() {
        describe('Test module and value', function() {

            // load the module
            beforeEach(angular.mock.module('<%= projectModule %>'));

            var <%= name %>;
            // Initialize the service
            beforeEach(inject(function(_<%= name %>_) {
                <%= name %> = _<%= name %>_;
            }));

            it('Check value', function() {
                expect(<%= name %>).to.be.equal('<%= name %>');
            });
        });
    });
})();
