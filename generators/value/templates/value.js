(function() {
    'use strict';

    /**
     * @ngdoc Value
     * @name <%= projectModule %>.value:<%= varname %>
     * @description
     * # <%= varname %>
     * Value of the <%= projectModule %>
     */
    angular.module('<%= projectModule %>')
        .value('<%= varname %>', '<%= name %>');

})();
