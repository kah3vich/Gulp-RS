import webpack from "webpack";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";

const config = {
	mode: "development",
	output: {
		filename: "webpack.min.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
		],
	},
	plugins: [
		new UglifyJsPlugin({
			sourceMap: true,
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
		}),
	],
	devtool: "source-map",
};

export default { config };
