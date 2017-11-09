(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name <%= projectModule %>.service:<%= varname %>
     *
     * @description
     * Description of the service <%= varname %>
     */
    angular
        .module('<%= projectModule %>')
        .service('<%= varname %>', function() {
            // AngularJS will instantiate a singleton by calling "new" on this function
            this.name = '<%= name %>';
        });

})();
