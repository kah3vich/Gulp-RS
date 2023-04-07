import size from "gulp-filesize";
import imagemin from "gulp-imagemin";

//! ✅ Image - 

export const image = () => {
	return app.gulp
		.src(app.path.src.image, { sourcemaps: true })
        //* 💡 ru - сообщение при ошибки в текущей функции.
        //* 💡 en - message for errors in the current function.
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "Image",
					message: "Error: <%= error.message %>",
				})
			)
		)
		//* 💡 ru - 
		//* 💡 en - 
		.pipe(app.plugins.newer(app.path.build.image))
		.pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.image)))
		.pipe(app.plugins.if(app.isBuild, app.gulp.src(app.path.src.image)))
		.pipe(app.plugins.if(app.isBuild, app.plugins.newer(app.path.build.image)))
		//* 💡 ru - 
		//* 💡 en - 
		.pipe(app.plugins.if(app.isBuild,
			imagemin({
				progressive: true,
				svgoPlugins: [{ removeViewBox: false }],
				interlaced: true,
				optimizationLevel: 3,
			})
		))
		.pipe(app.gulp.dest(app.path.build.image))
		//* 💡 ru - 
		//* 💡 en - 
		.pipe(app.plugins.if(app.isBuild, size()))
		.pipe(app.plugins.browsersync.stream());
};
