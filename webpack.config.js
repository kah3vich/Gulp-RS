// // import UglifyJsPlugin from "uglifyjs-webpack-plugin";

// module.exports = {
// 	mode: 'development',
// 	output: {
// 		filename: 'app.js'
// 	},
// 	module: {
// 		rules: [
// 			{
// 				test: /\.js$/,
// 				exclude: /node_modules/,
// 				use: ['babel-loader']
// 			}
// 		]
// 	}
// 	// plugins: [
// 	// 	// new UglifyJsPlugin({
// 	// 	// 	sourceMap: true,
// 	// 	// }),
// 	// 	// new webpack.ProvidePlugin({
// 	// 	// 	$: "jquery",
// 	// 	// 	jQuery: "jquery",
// 	// 	// }),
// 	// ],
// 	// devtool: 'source-map'
// }

// export default { config }

// const path = require("path");

const webpackConfig = {
	entry: {
		main: './src/js/app.js'
	},

	output: {
		filename: '[name].js',
		chunkFilename: '[name].js',
		publicPath: '/'
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /node_modules/,
					chunks: 'initial',
					name: 'vendor',
					enforce: true
				}
			}
		}
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env', { modules: false }]]
					}
				}
			}
		]
	}

	// resolve: {
	//     alias: {
	//         "%modules%": path.resolve(__dirname, "src/blocks/modules"),
	//         "%components%": path.resolve(__dirname, "src/blocks/components")
	//     }
	// }
}

export default webpackConfig
