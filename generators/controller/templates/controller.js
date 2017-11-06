(function() {
    'use strict';

    /**
     * @ngdoc Controller
     * @name <%= projectModule %>.controller:<%= name %>
     * @description
     * # <%= name %>
     * Controller of the <%= projectModule %>
     */
    angular.module('<%= projectModule %>')
        .controller('<%= name %>', function() {
            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Mocha'
            ];
        });

})();