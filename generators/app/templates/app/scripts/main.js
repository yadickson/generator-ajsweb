(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name <%= modulename %>
     *
     * @requires ui.router
     *
     * @description
     * Description of the module <%= modulename %>
     */
    angular
        .module('<%= modulename %>', [
            'ui.router'
        ])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('root', {
                    abstract: true,
                    views: {
                        'header@': {},
                        'main@': {},
                        'footer@': {}
                    }
                })
                // inject:routes
                // endinject
            ;

            $urlRouterProvider.otherwise('/home');

        }]);

})();
