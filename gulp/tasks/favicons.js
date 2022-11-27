// import debug from "gulp-debug";
import favicons from "gulp-favicons";

export const favicon = () => {
    return app.gulp
        .src(app.path.src.faviconPath)
        .pipe(favicons({
            icons: {
                appleIcon: true,
                favicons: true,
                online: false,
                appleStartup: false,
                android: false,
                firefox: false,
                yandex: false,
                windows: false,
                coast: false
            }
        }))
        // .pipe(gulp.dest(app.path.build.faviconPath))
        .pipe(app.gulp.dest(`${app.path.build.faviconPath}`))
		.pipe(app.plugins.browsersync.stream());
        // .pipe(debug({
        //     "title": "Favicons"
        // }));
}