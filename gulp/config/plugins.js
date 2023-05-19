import browsersync from 'browser-sync';
import ifPlugin from 'gulp-if';
import newer from 'gulp-newer';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import replace from 'gulp-replace';

export const plugins = {
	replace,
	plumber,
	notify,
	browsersync,
	newer,
	if: ifPlugin,
};
