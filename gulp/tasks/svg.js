import svgSprite from "gulp-svg-sprite";
import svgmin from "gulp-svgmin";

//! ✅ SVG -

export const svg = () => {
	return app.gulp
		.src(app.path.src.svg)
        //* 💡 ru - сообщение при ошибки в текущей функции.
        //* 💡 en - message for errors in the current function.
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "SVG",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(app.gulp.src(app.path.src.svg))
		//* 💡 ru - 
		//* 💡 en - 
		.pipe(app.plugins.if(app.isBuild, svgmin({
			js2svg: {
				pretty: false,
			},
		})))
		//* 💡 ru - 
		//* 💡 en - 
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
