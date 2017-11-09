(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name <%= projectModule %>
     *
     * @requires ui.router
     *
     * @description
     * Description of the module <%= projectModule %>
     */
    angular
        .module('<%= projectModule %>', [
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
