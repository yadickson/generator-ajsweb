(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name <%= projectModule %>.factory:<%= varname %>
     *
     * @description
     * Description of the factory <%= varname %>
     */
    angular
        .module('<%= projectModule %>')
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
