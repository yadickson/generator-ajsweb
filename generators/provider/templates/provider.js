(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name <%= projectModule %>.provider:<%= varname %>
     *
     * @description
     * Description of the provider <%= varname %>
     */
    angular
        .module('<%= projectModule %>')
        .provider('<%= varname %>', function() {

            // Private variables
            var name = '<%= name %>';

            // Private constructor
            function Constructor() {
                this.constructor = function() {
                    return name;
                };
            }

            // Public API for configuration
            this.setName = function(_str) {
                name = _str;
            };

            // Method for instantiating
            this.$get = function() {
                return new Constructor();
            };

        });

})();
