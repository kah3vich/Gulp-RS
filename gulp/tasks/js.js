import webpack from "webpack";
import webpackStream from "webpack-stream";
import webpackConfig from "../../webpack.config.js";
import uglify from "gulp-uglify";
import babel from "gulp-babel";
import babelConfig from "../../babel.config.js";
import rename from "gulp-rename";
import fileInclude from "gulp-file-include";

export const js = () => {
	return app.gulp
		.src(app.path.src.js)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "JS",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(fileInclude())
		.pipe(babel(babelConfig))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(
			app.plugins.if(
				app.isBuild,
				uglify({
					mangle: true,
				})
			)
		)
		.pipe(
			rename({
				extname: ".min.js",
			})
		)
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(webpackStream(webpackConfig), webpack)
		.pipe(
			app.plugins.if(
				app.isBuild,
				uglify({
					mangle: true,
				})
			)
		)
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
};
