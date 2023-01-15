import webpack from "webpack";
import webpackStream from "webpack-stream";
import gulp from "gulp";
import webpackConfig from "../../webpack.config.js";


webpackConfig.mode = "development";
webpackConfig.devtool = "source-map";

export const js = () => {
    return gulp
        .src(app.path.src.js)
        .pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "JavaScript",
					message: "Error: <%= error.message %>",
				})
			)
		)
        .pipe(webpackStream(webpackConfig), webpack)
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
}