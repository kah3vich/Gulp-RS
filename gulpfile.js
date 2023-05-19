import gulp from 'gulp';

//| Config

import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

//| Tasks

import { favicon } from './gulp/tasks/favicons.js';
import { fontsStyle, otfToTtf, ttfToWoff } from './gulp/tasks/fonts.js';
import { html } from './gulp/tasks/html.js';
import { image } from './gulp/tasks/image.js';
import { js } from './gulp/tasks/js.js';
import { reset } from './gulp/tasks/reset.js';
import { scss } from './gulp/tasks/scss.js';
import { server } from './gulp/tasks/server.js';
import { svg } from './gulp/tasks/svg.js';
import { zip } from './gulp/tasks/zip.js';

global.app = {
	isBuild: process.argv.includes('--build'),
	idDev: !process.argv.includes('--build'),
	path,
	gulp,
	plugins,
};

const watcher = () => {
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.svg, svg);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.image, image);
	gulp.watch(path.watch.faviconPath, favicon);
};

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
const mainTasks = gulp.series(fonts, gulp.parallel(html, scss, js, image, svg, favicon));
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);

export { build, deployZIP, dev };

gulp.task('default', dev);
