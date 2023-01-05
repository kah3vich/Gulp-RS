// import fileInclude from "gulp-file-include";
import flatten from "gulp-flatten";
import pug from "gulp-pug";
import versionNumber from "gulp-version-number";
// import webpHtmlNosvg from "gulp-webp-html-nosvg";

export const html = () => {
	return app.gulp
		.src(app.path.src.html)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "HTML",
					message: "Error: <%= error.message %>",
				})
			)
		)
		// .pipe(fileInclude())
		.pipe(
			pug({
				pretty: true,
			})
		)
		.pipe(app.plugins.replace(/(\.\.\/){1,}/g, "./"))
		// .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
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
		.pipe(flatten())
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browsersync.stream());
};
