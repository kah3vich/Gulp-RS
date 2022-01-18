import defSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import csscomb from "gulp-csscomb";
import cleanCss from "gulp-clean-css";
import webpcss from "gulp-webpcss";
import autoprefixer from "gulp-autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import sourcemaps from "gulp-sourcemaps";

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
		.pipe(app.plugins.replace(/@img\//g, "./../img/"))
		.pipe(
			sass({
				outputStyle: "expanded",
			})
		)
		.pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
		.pipe(
			app.plugins.if(
				app.isBuild,
				webpcss({
					webpClass: ".webp",
					noWebpClass: ".no-webp",
				})
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				autoprefixer({
					grid: true,
					overrideBrowserslist: ["last 3 version"],
					cascade: true,
				})
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				autoprefixer({
					grid: true,
					overrideBrowserslist: ["last 3 version"],
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
