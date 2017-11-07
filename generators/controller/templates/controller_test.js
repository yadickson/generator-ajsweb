(function() {
    'use strict';

    describe('Controller:<%= name %>', function() {
        describe('Test module and controller', function() {

            // load the controller's module
            beforeEach(angular.mock.module('<%= projectModule %>'));

            var <%= name %>,
                scope;

            // Initialize the controller and a mock scope
            beforeEach(inject(function($controller, $rootScope) {
                scope = $rootScope.$new();
                <%= name %> = $controller('<%= name %>', {
                    $scope: scope
                        // place here mocked dependencies
                });
            }));

            it('should attach a list of awesomeThings to the scope', function() {
                expect(<%= name %>.awesomeThings).to.be.an('array');
                expect(<%= name %>.awesomeThings).to.have.lengthOf(3);
            });
        });
    });
})();