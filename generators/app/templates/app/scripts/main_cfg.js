(function() {
    'use strict';

    angular
        .module('<%= projectModule %>')
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