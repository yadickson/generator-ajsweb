(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name <%= projectModule %>.decorator:<%= varname %>
     *
     * @requires <%= varname %>
     *
     * @description
     * Description of the decorator to <%= varname %>
     */
    angular
        .module('<%= projectModule %>')
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
