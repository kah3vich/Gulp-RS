export default {
    mode: 'development',
    output: {
        filename: 'webpack.min.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    externals: {
        jquery: 'jQuery'
    }
};