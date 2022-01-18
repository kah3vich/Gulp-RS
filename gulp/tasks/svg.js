import svgmin from "gulp-svgmin";
import svgSprite from "gulp-svg-sprite";

export const svg = () => {
	return app.gulp
		.src(app.path.src.svg)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "SVG",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(app.gulp.src(app.path.src.svg))
		.pipe(
			svgmin({
				js2svg: {
					pretty: false,
				},
			})
		)
		.pipe(
			svgSprite({
				mode: {
					stack: {
						sprite: "../sprite.svg",
					},
				},
			})
		)
		.pipe(app.gulp.dest(app.path.build.svg))
		.pipe(app.gulp.src(app.path.src.svg))
		.pipe(app.gulp.dest(app.path.build.svg))
		.pipe(app.plugins.browsersync.stream());
};
