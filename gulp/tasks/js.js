import webpack from "webpack";
import webpackStream from "webpack-stream";
import gulp from "gulp";
import webpackConfig from "../../webpack.config.js";


webpackConfig.mode = "development";
webpackConfig.devtool = "source-map";

//! ✅ Favicon

export const js = () => {
    return gulp
        .src(app.path.src.js)
        //* 💡 ru - сообщение при ошибки в текущей функции.
        //* 💡 en - message for errors in the current function.
        .pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "JavaScript",
					message: "Error: <%= error.message %>",
				})
			)
		)
		//* 💡 ru - 
		//* 💡 en - 
        .pipe(webpackStream(webpackConfig), webpack)
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
}