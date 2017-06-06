const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path');
// const fs = require('fs');

// FROM: http://jlongster.com/Backend-Apps-with-Webpack--Part-I#p28
// const nodeModules = {};
// fs.readdirSync('node_modules')
//     .filter(item => ['.bin'].indexOf(item) === -1 )  // exclude the .bin folder
//     .forEach((mod) => {
//         nodeModules[mod] = 'commonjs ' + mod;
//     });

module.exports = {
    watch: true,
    target: 'electron',
    entry: './app.js',
    devServer: {
        historyApiFallback: {
            index: '/'
        },
    },
    devtool: 'source-map',
    // externals: nodeModules,
    output: {
        path: __dirname + '/build',
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'app'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'env',
                            'react'
                        ]
                    }
                }
            },
            {
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, 'app'),
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        })
    ]
}
