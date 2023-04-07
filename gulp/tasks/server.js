//! ✅ Server - 

export const server = () => {
	app.plugins.browsersync.init({
		//* 💡 ru - 
		//* 💡 en - 
		server: {
			baseDir: `${app.path.build.html}`,
		},
		//* 💡 ru - 
		//* 💡 en - 
		notify: false,
		//* 💡 ru - 
		//* 💡 en - 
		port: 8080,
	});
};
