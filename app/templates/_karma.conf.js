module.exports = function(config) {
    config.set({

        basePath: '',
        // frameworks to use
        frameworks: ['browserify', 'mocha', 'chai'],

        // list of files / patterns to load in the browser

        files: [
            // `gulp test` add all files automatically
        ],

        reporters: ['progress', 'mocha', 'junit', 'coverage'],

        hostname: 'localhost',

        port: 9000,

        colors: true,

        autoWatch: true,

        browsers: ['PhantomJS'],

        preprocessors: {
            'app/scripts/**/*.js': ['coverage']
        },

        coverageReporter: {
            dir: 'coverage',
            reporters: [{
                type: 'html',
                subdir: '.'
            }]
        },

        junitReporter: {
            outputDir: 'reports',
            outputFile: 'test-results.xml',
            useBrowserName: false
        }

    });
};