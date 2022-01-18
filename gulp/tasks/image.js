import webp from "gulp-webp";
import imagemin from "gulp-imagemin";
import size from "gulp-filesize";

export const image = () => {
	return app.gulp
		.src(app.path.src.image, { sourcemaps: true })
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "IMAGE",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(app.plugins.newer(app.path.build.image))
		.pipe(app.plugins.if(app.isBuild, webp()))
		.pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.image)))
		.pipe(app.plugins.if(app.isBuild, app.gulp.src(app.path.src.image)))
		.pipe(app.plugins.if(app.isBuild, app.plugins.newer(app.path.build.image)))
		.pipe(
			imagemin({
				progressive: true,
				svgoPlugins: [{ removeViewBox: false }],
				interlaced: true,
				optimizationLevel: 3, // 0 - 7
			})
		)
		.pipe(app.gulp.dest(app.path.build.image))
		.pipe(size())
		.pipe(app.plugins.browsersync.stream());
};
