const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        index: './index',
        shop: './shop'
    },
    output: {
        path: path.join(__dirname, 'dest'),
        filename: "[name].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "piptik",
            hash: true,
            minify: {
                html5: true
            },
            template: "./tmpl.html"
        })
    ]
}