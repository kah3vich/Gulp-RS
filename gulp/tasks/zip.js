import del from "del";
import zipPlugin from "gulp-zip";

//! ✅ ZIP - finished assembly project in the format 'ZIP'.

export const zip = () => {
	del(`./${app.path.rootFolder}.zip`);
	return app.gulp
		.src(`${app.path.buildFolder}/**/*.*`)
        //* 💡 ru - сообщение при ошибки в текущей функции.
        //* 💡 en - message for errors in the current function.
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "Export ZIP",
					message: "Error: <%= error.message %>",
				})
			)
		)
		//* 💡 ru - 
		//* 💡 en - 
		.pipe(zipPlugin(`${app.path.rootFolder}.zip`))
		.pipe(app.gulp.dest("./"));
};
