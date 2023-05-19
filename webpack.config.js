const webpackConfig = {
	entry: {
		main: './src/js/app.js',
	},

	output: {
		filename: '[name].js',
		chunkFilename: '[name].js',
		publicPath: '/',
	},

	optimization: {
		minimize: true,
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /node_modules/,
					chunks: 'initial',
					name: 'vendor',
					enforce: true,
				},
			},
		},
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env', { modules: false }]],
					},
				},
			},
		],
	},
};

export default webpackConfig;
