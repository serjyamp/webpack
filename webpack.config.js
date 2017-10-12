const path = require('path');
 
module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        index: './index'
    },
    output: {
        path: path.join(__dirname, 'dest'),
        filename: "bundle.js"
    },
    module:{
    	rules: [
    		{
                test: /\.js$/,
                loader: 'strip-loader',
                options: {
                    strip: ['console.*']
                }
            }
    	]
    }
}