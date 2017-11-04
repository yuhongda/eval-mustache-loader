
var webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        index: './src/eval-mustache-loader.js'
    },
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'stage-2']
                        }
                    }
                ],
                
            }
        ]
    }
}
