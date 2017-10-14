const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
 
module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        index: './index'
    },
    output: {
        path: path.join(__dirname, 'dest'),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlPlugin({
            title: 'webpack devchik server'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}