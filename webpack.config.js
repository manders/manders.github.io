const path = require('path');

module.exports = {
    entry: './js6/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            include:  [
                path.resolve(__dirname, 'js6')
            ],
            use: {
                loader: 'babel-loader',
            }
        }]
    },
    // enable debugging using map
    devtool: "source-map"
};