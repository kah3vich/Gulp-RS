import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import csscomb from "gulp-csscomb";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import rename from "gulp-rename";
import gulpSass from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
import defSass from "sass";

const sass = gulpSass(defSass);

export const scss = () => {
	return app.gulp
		.src(app.path.src.scss, { sourcemaps: app.isDev })
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "SCSS",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(sourcemaps.init())
		.pipe(app.plugins.replace(/(\.\.\/){1,}/g, "./../"))
		.pipe(
			sass({
				outputStyle: "expanded",
			})
		)
		.pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
		.pipe(
			app.plugins.if(
				app.isBuild,
				autoprefixer({
					grid: true,
					overrideBrowserslist: ["last 5 version"],
					cascade: true,
				})
			)
		)
		.pipe(csscomb())
		.pipe(app.gulp.dest(app.path.build.scss))
		.pipe(app.plugins.if(app.isBuild, cleanCss()))
		.pipe(
			rename({
				extname: ".min.css",
			})
		)
		.pipe(sourcemaps.write("./"))
		.pipe(app.gulp.dest(app.path.build.scss))
		.pipe(app.plugins.browsersync.stream());
};
