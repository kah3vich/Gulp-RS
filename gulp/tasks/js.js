import webpack from "webpack";
import webpackStream from "webpack-stream";

// const webpackConfig = require("../../webpack.config.js")

// export const js = () => {
// 	return app.gulp
// 		.src(app.path.src.js)
// 		// .pipe(
// 		// 	app.plugins.plumber(
// 		// 		app.plugins.notify.onError({
// 		// 			title: "JS",
// 		// 			message: "Error: <%= error.message %>",
// 		// 		})
// 		// 	)
// 		// )
// 		// .pipe(fileInclude())
// 		// .pipe(babel(babelConfig))
// 		// .pipe(app.gulp.dest(app.path.build.js))
// 		// .pipe(
// 		// 	app.plugins.if(
// 		// 		app.isBuild,
// 		// 		uglify({
// 		// 			mangle: true,
// 		// 		})
// 		// 	)
// 		// )
// 		// .pipe(
// 		// 	rename({
// 		// 		extname: ".min.js",
// 		// 	})
// 		// )
// 		// .pipe(app.gulp.dest(app.path.build.js))
// 		.pipe(webpackStream(webpackConfig), webpack)
// 		// .pipe(
// 		// 	app.plugins.if(
// 		// 		app.isBuild,
// 		// 		uglify({
// 		// 			mangle: true,
// 		// 		})
// 		// 	)
// 		// )
// 		.pipe(app.gulp.dest(app.path.build.js))
// 		.pipe(app.plugins.browsersync.stream());
// };


"use strict";

import gulp from "gulp";
// import rename from "gulp-rename";
// import debug from "gulp-debug";
// import yargs from "yargs";
// import babel from "gulp-babel";

import webpackConfig from "../../webpack.config.js";

// const production = !!argv.production;

webpackConfig.mode = "development";
webpackConfig.devtool = "source-map";

export const js = () => {
// return gulp.task("scripts", () => {
    return gulp.src(app.path.src.js)
        .pipe(webpackStream(webpackConfig), webpack)
		// .pipe(babel(babelConfig))
        // .pipe(gulpif(production, rename({
        //     suffix: ".min"
        // })))
        // .pipe(gulp.dest(paths.scripts.dist))
        // // .pipe(debug({
        // //     "title": "JS files"
        // // }))
        // .pipe(browsersync.stream());
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
// });
}