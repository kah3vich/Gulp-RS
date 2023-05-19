export const server = () => {
	app.plugins.browsersync.init({
		server: {
			baseDir: `${app.path.build.html}`,
		},
		notify: false,
		port: 8080,
		open: false,
		browser: 'google chrome',
	});
};
