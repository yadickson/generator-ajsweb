(function() {
    'use strict';

    describe('Component:<%= varname %>', function() {
        describe('Test module and component', function() {

            // load the module
            beforeEach(angular.mock.module('<%= projectModule %>'));

            var controller;
            var scope;
            // Initialize the component
            beforeEach(inject(function($rootScope, $componentController) {
                scope = $rootScope.$new();
                controller = $componentController('<%= varname %>', {$scope: scope}, {myBinding: '1.5'});
            }));

            it('should expose my title', function() {
                expect(!!controller.myTitle).to.be.true;
                expect(controller.myTitle).to.be.equal('<%= name %>');
            });
 
            it('should have my binding bound', function() {
                expect(!!controller.myBinding).to.be.true;
                expect(controller.myBinding).to.be.equal('1.5');
            });
        });

        describe('Test rendered <%= varname %> component', function () {
            // load the module
            beforeEach(angular.mock.module('<%= projectModule %>'));
 
            var element;
            var scope;
            // Initialize the component
            beforeEach(inject(function($rootScope, $compile){
                scope = $rootScope.$new();
                element = angular.element('<<%= htmlname %> data-my-binding="{{outside}}"></<%= htmlname %>>');
                element = $compile(element)(scope);
                scope.outside = '1.5';
                scope.$apply();
            }));
 
            it('should render the text', function() {
                var h1 = element.find('h1');
                expect(h1.text()).to.be.equal('<%= name %> 1.5');
            });
 
        });
    });
})();
