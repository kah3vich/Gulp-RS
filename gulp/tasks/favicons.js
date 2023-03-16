
import favicons from "gulp-favicons";

export const favicon = () => {
    return app.gulp
        .src(app.path.src.faviconPath)
        .pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "Favicons",
					message: "Error: <%= error.message %>",
				})
			)
		)
        .pipe(app.plugins.if(app.isBuild, favicons({
            icons: {
                appleIcon: true,
                favicons: true,
                online: false,
                appleStartup: false,
                android: true,
                firefox: false,
                yandex: true,
                windows: true,
                coast: false
            }
        })))
        .pipe(app.gulp.dest(app.path.build.faviconPath))
		.pipe(app.plugins.browsersync.stream());
}