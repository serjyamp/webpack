const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './a',
    output: {
        path: path.join(__dirname, 'dest'),
        filename: "bundle.js"
    },
    devtool: "eval"
}