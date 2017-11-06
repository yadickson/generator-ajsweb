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
                .state('home', {
                    parent: 'root',
                    url: '/home',
                    views: {
                        'main@': {
                            controller: 'homeCtrl',
                            templateUrl: 'views/home.html',
                            controllerAs: 'vm'
                        }
                    }
                });

            $urlRouterProvider.otherwise('/home');

        }]);

})();
