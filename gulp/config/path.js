import * as nodePath from "path";

//! ✅ Path - paths for public use.

//* 💡 ru - переменная с корневой папкой проект.
//* 💡 en - variable with root folder project.

const rootFolder = nodePath.basename(nodePath.resolve());

//* 💡 ru - пути к папкам с исходника и с собранным проектом.
//* 💡 en - paths to folders from the source and with the assembled project.

const buildFolder = `./public`;
const srcFolder = `./src`;

//* 💡 ru - пути к различным разделам в текущем проекте.
//* 💡 en - paths to different sections in the current project.

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		image: `${buildFolder}/img/`,
		scss: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		fonts: `${buildFolder}/fonts/`,
		svg: `${buildFolder}/svg/`,
		faviconPath: `${buildFolder}/img/favicon/`,
	},
	public: {
		js: `${buildFolder}/js/`,
		image: `${buildFolder}/img/`,
		scss: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		fonts: `${buildFolder}/fonts/`,
		svg: `${buildFolder}/svg/`,
		faviconPath: `${buildFolder}/img/favicon/`,
	},
	src: {
		js: `${srcFolder}/js/app.js`,
		image: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico,mp4}`,
		scss: `${srcFolder}/scss/style.scss`,
		html: `${srcFolder}/pages/*.pug`,
		svg: `${srcFolder}/svg/**/**/*.svg`,
		faviconPath: `${srcFolder}/img/favicon/*.{png,svg,ico}`,
	},
	watch: {
		js: `${srcFolder}/**/*.js`,
		image: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico,mp4}`,
		scss: `${srcFolder}/**/*.scss`,
		html: `${srcFolder}/**/*.pug`,
		svg: `${srcFolder}/svg/**/*.svg`,
		faviconPath: `${srcFolder}/img/favicon/*.{png,svg,ico}`,
	},
	clean: buildFolder,
	cleanFontStyle: `${srcFolder}/scss/fonts.scss`,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
};
