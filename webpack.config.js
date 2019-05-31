const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
            // new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin({
                title: '管理输出'
            })
        ]
        // module: {
        //     rules: [{
        //             test: /\.(css|sass|less)$/,
        //             use: [
        //                 'style-loader',
        //                 'css-loader'
        //             ]
        //         },
        // {
        //     test: /\.(png|svg|jpg|gif)$/,
        //     use: [
        //         'file-loader'
        //     ]
        // },
        // {
        //     test: /\.(png|jpg|gif)$/i,
        //     use: [{
        //         loader: 'url-loader',
        //         options: {
        //             limit: 8192
        //         }
        //     }]
        // },
        // {
        //     test: /\.(woff|woff2|eot|ttf|otf)$/,
        //     use: [
        //         'file-loader'
        //     ]
        // },
        // {
        //     test: /\.(csv|tsv)$/,
        //     use: [
        //         'csv-loader'
        //     ]
        // },
        // {
        //     test: /\.xml$/,
        //     use: [
        //         'xml-loader'
        //     ]
        // }
        //     ]
        // }
}