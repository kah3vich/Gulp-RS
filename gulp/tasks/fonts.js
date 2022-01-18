import fs from "fs";
import fonter from "gulp-fonter";
import flatten from "gulp-flatten";
import chalk from "chalk";
import ttf2woff2 from "gulp-ttf2woff2";

export const otfToTtf = () => {
	return app.gulp
		.src(`${app.path.srcFolder}/fonts/**/*.otf`, {})
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "FONTS",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(
			fonter({
				formats: ["ttf"],
			})
		)
		.pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`));
};

export const ttfToWoff = () => {
	return app.gulp
		.src(`${app.path.srcFolder}/fonts/**/*.ttf`, {})
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "FONTS",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(
			fonter({
				formats: ["woff"],
			})
		)
		.pipe(flatten())
		.pipe(app.gulp.dest(`${app.path.build.fonts}`))
		.pipe(app.gulp.src(`${app.path.srcFolder}/fonts/**/*.ttf`))
		.pipe(ttf2woff2())
		.pipe(flatten())
		.pipe(app.gulp.dest(`${app.path.build.fonts}`));
};

export const fontsStyle = () => {
	let fonstFile = `${app.path.srcFolder}/scss/fonts.scss`;
	fs.readdir(app.path.build.fonts, function (err, fonstFiles) {
		if (fonstFiles) {
			if (!fs.existsSync(fonstFile)) {
				fs.writeFile(fonstFile, "", cd);
				let newFileOnly;
				for (var i = 0; i < fonstFiles.length; i++) {
					let fontFileName = fonstFiles[i].split(".")[0];
					if (newFileOnly !== fontFileName) {
						let fontName = fontFileName.split("-")[0]
							? fontFileName.split("-")[0]
							: fontFileName;
						let fontWight = fontFileName.split("-")[1]
							? fontFileName.split("-")[1]
							: fontFileName;
						let fontStyle = fontFileName.split("-")[1]
							? fontFileName.split("-")[1]
							: fontFileName;
						if (
							fontWight.toLocaleLowerCase() == "thin" ||
							fontWight.toLocaleLowerCase() == "hairlire"
						) {
							fontWight = 100;
							fontStyle = "normal";
						} else if (
							fontWight.toLocaleLowerCase() == "extralight" ||
							fontWight.toLocaleLowerCase() == "ultralight"
						) {
							fontWight = 200;
							fontStyle = "normal";
						} else if (
							fontWight.toLocaleLowerCase() == "light" ||
							fontWight.toLocaleLowerCase() == "book"
						) {
							fontWight = 300;
							fontStyle = "normal";
						} else if (
							fontWight.toLocaleLowerCase() == "regular" ||
							fontWight.toLocaleLowerCase() == "normal"
						) {
							fontWight = 400;
							fontStyle = "normal";
						} else if (fontWight.toLocaleLowerCase() == "medium") {
							fontWight = 500;
							fontStyle = "normal";
						} else if (
							fontWight.toLocaleLowerCase() == "semibold" ||
							fontWight.toLocaleLowerCase() == "demibold"
						) {
							fontWight = 600;
							fontStyle = "normal";
						} else if (fontWight.toLocaleLowerCase() == "bold") {
							fontWight = 700;
							fontStyle = "normal";
						} else if (
							fontWight.toLocaleLowerCase() == "extrabold" ||
							fontWight.toLocaleLowerCase() == "ultrabold"
						) {
							fontWight = 800;
							fontStyle = "normal";
						} else if (
							fontWight.toLocaleLowerCase() == "black" ||
							fontWight.toLocaleLowerCase() == "heavy"
						) {
							fontWight = 900;
							fontStyle = "normal";
						} else if (
							fontWight.toLocaleLowerCase() == "thinitalic" ||
							fontWight.toLocaleLowerCase() == "hairlireitalic"
						) {
							fontWight = 100;
							fontStyle = "italic";
						} else if (
							fontWight.toLocaleLowerCase() == "extralightitalic" ||
							fontWight.toLocaleLowerCase() == "ultralightitalic"
						) {
							fontWight = 200;
							fontStyle = "italic";
						} else if (
							fontWight.toLocaleLowerCase() == "lightitalic" ||
							fontWight.toLocaleLowerCase() == "bookitalic"
						) {
							fontWight = 300;
							fontStyle = "italic";
						} else if (fontWight.toLocaleLowerCase() == "italic") {
							fontWight = 400;
							fontStyle = "italic";
						} else if (fontWight.toLocaleLowerCase() == "mediumitalic") {
							fontWight = 500;
							fontStyle = "italic";
						} else if (
							fontWight.toLocaleLowerCase() == "semibolditalic" ||
							fontWight.toLocaleLowerCase() == "demibolditalic"
						) {
							fontWight = 600;
							fontStyle = "italic";
						} else if (fontWight.toLocaleLowerCase() == "bolditalic") {
							fontWight = 700;
							fontStyle = "italic";
						} else if (
							fontWight.toLocaleLowerCase() == "extrabolditalic" ||
							fontWight.toLocaleLowerCase() == "ultrabolditalic"
						) {
							fontWight = 800;
							fontStyle = "italic";
						} else if (
							fontWight.toLocaleLowerCase() == "blackitalic" ||
							fontWight.toLocaleLowerCase() == "heavyitalic"
						) {
							fontWight = 900;
							fontStyle = "italic";
						} else {
							fontWight = 400;
							fontStyle = "normal";
						}
						fs.appendFile(
							fonstFile,
							`@font-face { \n\tfont-family: ${fontName}; \n\tfont-display: swap; \n\tsrc: url("../fonts/${fontFileName}.woff") format("woff"), url("../fonts/${fontFileName}.woff2") format("woff2"); \n\tfont-weight: ${fontWight}; \n\tfont-style: ${fontStyle}; \n}\r\n`,
							cd
						);
						newFileOnly = fontFileName;
					}
				}
			} else {
				console.log(
					chalk.yellow(
						"File fonts.scss has already been created, to update it - delete it and run the build again."
					)
				);
			}
		}
	});
	return app.gulp.src(`${app.path.srcFolder}`);
	function cd() {}
};
