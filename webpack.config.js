const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
 
module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        index: './index',
        styles: './styles.css'
    },
    output: {
        path: path.join(__dirname, 'dest'),
        filename: "[name].js"
    },
    module: {
    	rules: [
    		{
    			test: /\.css$/,
    			// use: ['style-loader', 'css-loader']
    			use: ExtractTextPlugin.extract({
    				fallback: 'style-loader',
    				use: 'css-loader'
    			})
    		}
    	]
    },
    plugins: [
    	new ExtractTextPlugin('[name].css')
    ]
}