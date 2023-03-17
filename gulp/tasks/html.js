import flatten from "gulp-flatten";
import pug from "gulp-pug";
import versionNumber from "gulp-version-number";

//! ✅ HTML - 

export const html = () => {
	return app.gulp
		.src(app.path.src.html)
        //* 💡 ru - сообщение при ошибки в текущей функции.
        //* 💡 en - message for errors in the current function.
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "HTML",
					message: "Error: <%= error.message %>",
				})
			)
		)
		//* 💡 ru - 
		//* 💡 en - 
		.pipe(
			pug({
				pretty: true,
			})
		)
		//* 💡 ru - 
		//* 💡 en - 
		.pipe(app.plugins.replace(/(\.\.\/){1,}/g, "./"))

		//* 💡 ru - 
		//* 💡 en - 
		.pipe(
			app.plugins.if(
				app.isBuild,
				versionNumber({
					value: "%DT%",
					append: {
						key: "_v",
						cover: 0,
						to: ["css", "js"],
					},
					output: {
						file: "./version.json",
					},
					
				})
			)
		)
		.pipe(app.gulp.dest(app.path.build.html))
		//* 💡 ru - 
		//* 💡 en - 
		.pipe(flatten())
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browsersync.stream());
};
