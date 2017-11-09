(function() {
    'use strict';

    /**
     * @ngdoc filter
     * @name <%= projectModule %>.filter:<%= varname %>
     *
     * @description
     * Description of the filter <%= varname %>
     * 
     * @example
     * {{ foo | <%= varname %> }}
     */
    angular
        .module('<%= projectModule %>')
        .filter('<%= varname %>', function() {
            return function(input) {
                return '<%= varname %> filter: ' + input;
            };
        });

})();