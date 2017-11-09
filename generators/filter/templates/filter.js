(function() {
    'use strict';

    /**
     * @ngdoc filter
     * @name <%= projectModule %>.filter:<%= varname %>
     *
     * @description
     * Description of the filter <%= varname %>
     * 
     * @example
       <example module="<%= projectModule %>">
           <file name="index.html">
               <div ng-repeat="i in [1,2,3]">
                   {{ i | <%= varname %>}}
                </div>
           </file>
       </example>
     */
    angular
        .module('<%= projectModule %>')
        .filter('<%= varname %>', function() {
            return function(input) {
                return '<%= varname %> filter: ' + input;
            };
        });

})();
