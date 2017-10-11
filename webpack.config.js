const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        index: './index',
        profile: './profile',
        shop: './shop',
        vendor: ['jquery', 'lodash']
    },
    output: {
        path: path.join(__dirname, 'dest'),
        filename: "[name].js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['common', 'vendor'],
            minChunks: 2
        })
    ]
}