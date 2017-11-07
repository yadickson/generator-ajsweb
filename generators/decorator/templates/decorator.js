(function() {
    'use strict';

    /**
     * @ngdoc Decorator
     * @name <%= projectModule %>.decorator:<%= varname %>
     * @description
     * # <%= varname %>
     * Decorator of the <%= projectModule %> for <%= varname %>
     */
    angular.module('<%= projectModule %>')
        .config(['$provide', function($provide) {
            $provide.decorator('<%= varname %>', ['$delegate', function($delegate) {
                // decorate the $delegate

                function newHelp() {
                    return '<%= name %>';
                }

                $delegate.help = newHelp;

                return $delegate;
            }]);
        }]);
})();