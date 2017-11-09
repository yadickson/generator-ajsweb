(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name <%= projectModule %>.decorator:<%= varname %>
     *
     * @requires <%= varname %>
     *
     * @description
     * Description of the decorator <%= varname %>
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