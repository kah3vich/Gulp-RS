import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import csscomb from "gulp-csscomb";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import rename from "gulp-rename";
import gulpSass from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
import defSass from "sass";

const sass = gulpSass(defSass);

//! ✅ SCSS - 

export const scss = () => {
	return app.gulp
		.src(app.path.src.scss, { sourcemaps: app.isDev })
        //* 💡 ru - сообщение при ошибки в текущей функции.
        //* 💡 en - message for errors in the current function.
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "SCSS",
					message: "Error: <%= error.message %>",
				})
			)
		)
		//* 💡 ru - 
		//* 💡 en - 
		.pipe(sourcemaps.init())
		//* 💡 ru - 
		//* 💡 en - 
		.pipe(app.plugins.replace(/(\.\.\/){1,}/g, "./../"))
		//* 💡 ru - 
		//* 💡 en - 
		.pipe(
			sass({
				outputStyle: "expanded",
			})
		)
		//* 💡 ru - 
		//* 💡 en - 
		.pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
		//* 💡 ru - 
		//* 💡 en - 
		.pipe(
			app.plugins.if(
				app.isBuild,
				autoprefixer({
					grid: true,
					cascade: true,
					flexbox: true,
					supports: true,
					ignoreUnknownVersions: true,
					overrideBrowserslist: ["last 5 version"]
				})
			)
		)
		//* 💡 ru - 
		//* 💡 en - 
		.pipe(csscomb())
		.pipe(app.gulp.dest(app.path.build.scss))
		//* 💡 ru - 
		//* 💡 en - 
		.pipe(app.plugins.if(app.isBuild, cleanCss()))
		//* 💡 ru - 
		//* 💡 en - 
		.pipe(
			rename({
				extname: ".min.css",
			})
		)
		//* 💡 ru - 
		//* 💡 en - 
		.pipe(sourcemaps.write("./"))
		.pipe(app.gulp.dest(app.path.build.scss))
		.pipe(app.plugins.browsersync.stream());
};
