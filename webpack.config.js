const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        // path: path.resolve(__dirname),
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }]
    },
    devServer: {
        // contentBase: path.resolve(__dirname),
        publicPath: '/dist',
        compress: true,
        port: 9000
    }

};