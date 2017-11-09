(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name <%= projectModule %>.value:<%= varname %>
     *
     * @description
     * Description of the value <%= varname %>
     */
    angular
        .module('<%= projectModule %>')
        .value('<%= varname %>', '<%= name %>');

})();
