import fs from "fs";
import flatten from "gulp-flatten";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";
import { fontsConfig } from '../config/constants.js';

//! ✅ OTF To TTF - converting fonts from OTF format to TTF format.

export const otfToTtf = () => {
	return app.gulp
		.src(`${app.path.srcFolder}/fonts/**/*.otf`)
        //* 💡 ru - сообщение при ошибки в текущей функции.
        //* 💡 en - message for errors in the current function.
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "Font: otf to ttf",
					message: "Error: <%= error.message %>",
				})
			)
		)
		//* 💡 ru - 
        //* 💡 en - 
		.pipe(
			fonter({
				formats: ["ttf"],
			})
		)
		.pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`));
};

//! ✅ TTF To WOFF - converting fonts from TTF format to WOFF format.

export const ttfToWoff = () => {
	return app.gulp
		.src(`${app.path.srcFolder}/fonts/**/*.ttf`)
        //* 💡 ru - сообщение при ошибки в текущей функции.
        //* 💡 en - message for errors in the current function.
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "Font: ttf to woff",
					message: "Error: <%= error.message %>",
				})
			)
		)
		//* 💡 ru - 
        //* 💡 en - 
		.pipe(
			fonter({
				formats: ["woff"],
			})
		)
		//* 💡 ru - 
        //* 💡 en - 
		.pipe(flatten())
		.pipe(app.gulp.dest(app.path.build.fonts))
		.pipe(app.gulp.src(`${app.path.srcFolder}/fonts/**/*.ttf`))
		.pipe(app.plugins.if(app.isBuild, ttf2woff2()))
		.pipe(flatten())
		.pipe(app.gulp.dest(app.path.build.fonts));
};

//! ✅ GetFontParams - 

const getFontParams = (fontItem, part) => {
	if (fontItem.split("-")[part]) {
		return fontItem.split("-")[part]
	} 
	return fontItem
}

//! ✅ GetResultParamsFont - 

const getResultParamsFont = (font) => {
	const result = {
		fontStyle: 'normal',
		fontWight: 400
	}

	//* 💡 ru - 
	//* 💡 en - 
	fontsConfig.forEach((config) => {
		config.name.forEach((el) => {
			if (font.toLocaleLowerCase() === el) {
				result.fontStyle = config.type
				result.fontWight = config.wight
			}
		})
	})

	return result
}

//! ✅ FontsStyle - 

export const fontsStyle = () => {
	let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;

	//* 💡 ru - 
	//* 💡 en - 
	fs.readdir(app.path.build.fonts, (_, fontsFiles) => {
		if (fontsFiles) {
			if (!fs.existsSync(fontsFile)) {
				fs.writeFile(fontsFile, "", () => {});
				let newFileOnly;

				for (const fontFiles of fontsFiles) {
					const fontFileName = fontFiles.split(".")[0];
					
					if (newFileOnly !== fontFileName) {
						const fontName = getFontParams(fontFileName, 0)
						const { fontStyle, fontWight } = getResultParamsFont(getFontParams(fontFileName, 1))

						//* 💡 ru - 
						//* 💡 en - 
						fs.appendFile(
							fontsFile,
							`@font-face { \n\tfont-family: ${fontName}; \n\tfont-display: swap; \n\tsrc: \n\turl("../fonts/${fontFileName}.woff") \n\tformat("woff"), \n\turl("../fonts/${fontFileName}.woff2") \n\tformat("woff2"); \n\tfont-weight: ${fontWight}; \n\tfont-style: ${fontStyle}; \n}\r\n\n`,
							() => {}
						);

						newFileOnly = fontFileName;
					}
				}
			}
		}
	});

	return app.gulp.src(`${app.path.srcFolder}`);
};
