(function() {
    'use strict';

    /**
     * @ngdoc controller
     * @name <%= projectModule %>.controller:<%= name %>
     *
     * @description
     * Description of the controller <%= name %>
     */
    angular
        .module('<%= projectModule %>')
        .controller('<%= name %>', function() {
            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Mocha'
            ];
        });

})();