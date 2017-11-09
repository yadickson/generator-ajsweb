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
       <example module="<%= projectModule %>">
           <file name="index.html">
               <input type='text' data-ng-model="outside" />
               <<%= htmlname %> data-my-binding="{{outside}}"></<%= htmlname %>>
           </file>
       </example>
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
