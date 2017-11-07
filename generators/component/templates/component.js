(function() {
    'use strict';

    /**
     * @ngdoc Component
     * @name <%= projectModule %>.component:<%= varname %>
     * @description
     * # <%= varname %>
     * Component of the <%= projectModule %>
     */
    angular.module('<%= projectModule %>')
        .component('<%= varname %>', {
            templateUrl: 'views/<%= template %>',
            controller: <%= ctrlname %>
        });

})();