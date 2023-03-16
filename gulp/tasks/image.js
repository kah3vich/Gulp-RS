import size from "gulp-filesize";
import imagemin from "gulp-imagemin";

export const image = () => {
	return app.gulp
		.src(app.path.src.image, { sourcemaps: true })
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "Image",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(app.plugins.newer(app.path.build.image))
		.pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.image)))
		.pipe(app.plugins.if(app.isBuild, app.gulp.src(app.path.src.image)))
		.pipe(app.plugins.if(app.isBuild, app.plugins.newer(app.path.build.image)))
		.pipe(app.plugins.if(app.isBuild,
			imagemin({
				progressive: true,
				svgoPlugins: [{ removeViewBox: false }],
				interlaced: true,
				optimizationLevel: 3,
			})
		))
		.pipe(app.gulp.dest(app.path.build.image))
		.pipe(size())
		.pipe(app.plugins.browsersync.stream());
};
