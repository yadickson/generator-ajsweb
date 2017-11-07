(function() {
    'use strict';

    /**
     * @ngdoc Factory
     * @name <%= projectModule %>.factory:<%= name %>
     * @description
     * # <%= name %>
     * Factory of the <%= projectModule %>
     */
    angular.module('<%= projectModule %>')
        .factory('<%= name %>', function() {
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
