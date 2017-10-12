const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
 
module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        index: './index'
    },
    output: {
        path: path.join(__dirname, 'dest'),
        filename: "[name].js"
    },
    module:{
        rules:[
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles.css',
            allChunks: true
        })
    ]
}