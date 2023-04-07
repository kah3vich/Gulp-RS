
import favicons from "gulp-favicons";

//! ✅ Favicon - icon generator for the project.

export const favicon = () => {
    return app.gulp
        .src(app.path.src.faviconPath)
        //* 💡 ru - сообщение при ошибки в текущей функции.
        //* 💡 en - message for errors in the current function.
        .pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "Favicons",
					message: "Error: <%= error.message %>",
				})
			)
		)
        //* 💡 ru - плагин для генерации иконки проект под различные устройства и форматы.
        //* 💡 en - plugin for generating project icons for various devices and formats.
        .pipe(app.plugins.if(app.isBuild, favicons({
            icons: {
                appleIcon: true,
                favicons: true,
                online: false,
                appleStartup: false,
                android: true,
                firefox: false,
                yandex: true,
                windows: true,
                coast: false
            }
        })))
        .pipe(app.gulp.dest(app.path.build.faviconPath))
		.pipe(app.plugins.browsersync.stream());
}