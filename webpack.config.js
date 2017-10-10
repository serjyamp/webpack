const path = require('path');
const CaseSensitivePathsWebpackPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './init.js',
    output: {
        path: path.join(__dirname, 'dest'),
        filename: "bundle.js"
    },
    plugins: [
        new CaseSensitivePathsWebpackPlugin()
    ]
}