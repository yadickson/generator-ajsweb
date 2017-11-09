// generated on <%= date %> using <%= name %> <%= version %>

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const runSequence = require('run-sequence');
const reload = browserSync.reload;
const karma = require('karma').Server;
const del = require('del');
const jshint = require("gulp-jshint");
const ajsweb = require("gulp-ajsweb");

let dev = true;
let minimal = false;
let dest = 'dist';
let bootstrap = <%= includeBootstrap %>;
let sass = <%= includeSass %>;

gulp.task('clean', () => {
    return del(['build', 'dist', 'coverage', 'reports', '*.tgz', '*.zip', 'docs']);
});

gulp.task('compile', ['fonts', 'images', 'icon', 'views', 'jshint'], () => {});

gulp.task('default', ['build'], () => {});

gulp.task('build', () => {
    return new Promise(resolve => {
        minimal = false;
        dest = 'build';
        runSequence(['clean'], ['compile'], resolve);
    });
});

gulp.task('dist', () => {
    return new Promise(resolve => {
        minimal = true;
        dest = 'dist';
        runSequence(['clean'], ['compile'], resolve);
    });
});

gulp.task('docs', () => {
    return new Promise(resolve => {
        minimal = true;
        dest = 'docs';
        runSequence(['clean'], ['compile'], ['js2docs'], resolve);
    });
});

gulp.task('scripts', () => {
    return ajsweb.buildScripts({
            dest: dest,
            minimal: minimal
        })
        .pipe(reload({
            stream: true
        }));
});

gulp.task('styles', () => {
    return ajsweb.buildStyles({
            dest: dest,
            minimal: minimal,
            bootstrap: bootstrap,
            sass: sass
        })
        .pipe(reload({
            stream: true
        }));
});

gulp.task('fonts', () => {
    return ajsweb.buildFonts({
            dest: dest,
            minimal: minimal
        })
        .pipe(reload({
            stream: true
        }));
});

gulp.task('views', () => {
    return ajsweb.buildViews({
            dest: dest,
            minimal: minimal,
            bootstrap: bootstrap,
            sass: sass
        })
        .pipe(reload({
            stream: true
        }));
});

gulp.task('jshint', () => {
    return ajsweb.appScripts()
        .pipe(jshint())
        .pipe(jshint.reporter());
});

gulp.task('images', () => {
    return ajsweb.buildImages({
            dest: dest,
            minimal: minimal
        })
        .pipe(reload({
            stream: true
        }));
});

gulp.task('icon', () => {
    return ajsweb.buildIcon({
            dest: dest,
            minimal: minimal
        })
        .pipe(reload({
            stream: true
        }));
});

gulp.task('js2docs', function() {
    return ajsweb.buildDocs({
        dest: dest
    });
});

gulp.task('testHtml', ['build'], () => {
    return ajsweb.buildIndexTest({
        dest: dest,
        minimal: minimal,
        bootstrap: bootstrap,
        sass: sass
    });
});

gulp.task('pretest', ['clean'], function() {
    return ajsweb.updateKarmaFile({
        configFile: 'karma.conf.js',
        dest: '.'
    });
});

gulp.task('test', ['pretest'], function() {
    return new karma({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }).start();
});

gulp.task('serve', ['build'], () => {
    browserSync.init({
        notify: false,
        port: 9000,
        server: {
            baseDir: dest
        }
    });

    gulp.watch(ajsweb.paths.appScripts, ['scripts']);
    gulp.watch(ajsweb.paths.appStyles, ['styles']);
    gulp.watch(ajsweb.paths.appViews, ['views']);
    gulp.watch(ajsweb.paths.appImages, ['images']);
    gulp.watch(ajsweb.paths.appFonts, ['fonts']);
    gulp.watch(ajsweb.paths.appIcon, ['icons']);
});

gulp.task('serve:dist', ['dist'], () => {
    browserSync.init({
        notify: false,
        port: 9000,
        server: {
            baseDir: dest
        }
    });
});

gulp.task('serve:test', ['testHtml'], () => {
    browserSync.init({
        notify: false,
        port: 9000,
        ui: false,
        server: {
            baseDir: dest,
            index: "test.html"
        }
    });

    gulp.watch(ajsweb.paths.appScripts, ['scripts']);
    gulp.watch([ajsweb.paths.appTests, dest + '/*.html']).on('change', reload);
});

gulp.task('serve:docs', ['docs'], () => {
    browserSync.init({
        notify: false,
        port: 9000,
        ui: false,
        server: {
            baseDir: dest,
            index: "index.html"
        }
    });

});