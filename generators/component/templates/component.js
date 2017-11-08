(function() {
    'use strict';

    /**
     * @ngdoc Component
     * @name <%= projectModule %>.component:<%= varname %>
     * @description
     * # <%= varname %>
     * Component of the <%= projectModule %>
     */
    angular.module('<%= projectModule %>')
        .component('<%= varname %>', {
            bindings: {
                myBinding: '@'
            },
            controller: function() {
                this.myTitle = '<%= name %>';
            },
            template: '<h1>{{ $ctrl.myTitle }} {{ $ctrl.myBinding }}</h1>'
        });

})();
