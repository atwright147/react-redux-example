import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body'
});

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
    plugins: [HtmlWebpackPluginConfig]
}
