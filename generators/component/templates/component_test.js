(function() {
    'use strict';

    describe('Component:<%= varname %>', function() {
        describe('Test module and constant', function() {

            // load the module
            beforeEach(angular.mock.module('<%= projectModule %>'));

            var <%= name %>;
            // Initialize the component
            beforeEach(inject(function(_<%= varname %>_) {
                <%= name %> = _<%= varname %>_;
            }));

            it('Check component <%= varname %>', function() {
                expect(!!<%= name %>).to.be.true;
            });
        });
    });
})();