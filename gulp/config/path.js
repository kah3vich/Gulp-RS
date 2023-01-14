import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./public`;
const srcFolder = `./src`;

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
