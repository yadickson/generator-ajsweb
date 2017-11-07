(function() {
    'use strict';

    /**
     * @ngdoc Directive
     * @name <%= projectModule %>.directive:<%= varname %>
     * @description
     * # <%= varname %>
     * Directive of the <%= projectModule %>
     */
    angular.module('<%= projectModule %>')
        .directive('<%= varname %>', function() {

            return {
                template: '<div></div>',
                restrict: 'E',
                link: function postLink(scope, element, attrs) {
                    element.text('this is the <%= varname %> directive');
                }
            }
        });

})();