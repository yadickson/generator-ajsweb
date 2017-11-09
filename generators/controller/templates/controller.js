(function() {
    'use strict';

    /**
     * @ngdoc controller
     * @name <%= projectModule %>.controller:<%= varname %>
     *
     * @description
     * Description of the controller <%= varname %>
     */
    angular
        .module('<%= projectModule %>')
        .controller('<%= varname %>', function() {
            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Mocha'
            ];
        });

})();
