(function() {
    'use strict';

    /**
     * @ngdoc Service
     * @name <%= projectModule %>.service:<%= varname %>
     * @description
     * # <%= varname %>
     * Service of the <%= projectModule %>
     */
    angular.module('<%= projectModule %>')
        .service('<%= varname %>', function() {
            // AngularJS will instantiate a singleton by calling "new" on this function
            this.name = '<%= name %>';
        });

})();
