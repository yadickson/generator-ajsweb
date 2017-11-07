(function() {
    'use strict';

    /**
     * @ngdoc Filter
     * @name <%= projectModule %>.filter:<%= varname %>
     * @description
     * # <%= varname %>
     * Filter of the <%= projectModule %>
     */
    angular.module('<%= projectModule %>')
        .filter('<%= varname %>', function() {
            return function(input) {
                return '<%= varname %> filter: ' + input;
            };
        });

})();