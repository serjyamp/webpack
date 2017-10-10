const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './init.js',
    output: {
        path: path.join(__dirname, 'dest'),
        filename: "bundle.js"
    },
    plugins: [
    	new webpack.optimize.UglifyJsPlugin()
    ]
}