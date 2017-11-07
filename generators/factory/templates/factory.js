(function() {
    'use strict';

    /**
     * @ngdoc Factory
     * @name <%= projectModule %>.factory:<%= varname %>
     * @description
     * # <%= varname %>
     * Factory of the <%= projectModule %>
     */
    angular.module('<%= projectModule %>')
        .factory('<%= varname %>', function() {
            // Service logic
            // ...

            var name = '<%= name %>';

            // Public API here
            return {
                someMethod: function() {
                    return name;
                }
            };
        });

})();
