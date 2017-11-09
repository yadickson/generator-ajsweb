(function() {
    'use strict';

    /**
     * @ngdoc component
     * @name <%= projectModule %>.component:<%= varname %>
     *
     * @description
     * Description of the component <%= varname %>
     *
     * @example
     * <<%= htmlname %> data-my-binding="{{outside}}"></<%= htmlname %>>
     */
    angular
        .module('<%= projectModule %>')
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
