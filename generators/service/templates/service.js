(function() {
    'use strict';

    /**
     * @ngdoc Service
     * @name <%= projectModule %>.service:<%= name %>
     * @description
     * # <%= name %>
     * Service of the <%= projectModule %>
     */
    angular.module('<%= projectModule %>')
        .service('<%= name %>', function() {
            // AngularJS will instantiate a singleton by calling "new" on this function
            this.name = '<%= name %>';
        });

})();