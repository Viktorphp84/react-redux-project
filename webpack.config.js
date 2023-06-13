const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*const FileManagerPlugin = require('filemanager-webpack-plugin');*/
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

    mode: "development",

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        /*new FileManagerPlugin({
            events: {
                onStart: {delete: ['dist']}
            }
        }),*/
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })
    ],

    devServer: {
        watchFiles: path.join(__dirname, 'src'),
        port: 3000
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    entry: path.join(__dirname, 'src', 'index.jsx'),

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.[contenthash].js',
        assetModuleFilename: path.join('images', '[name].[contenthash][ext]')
    },

    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoaders: 1, modules: true } },
                    'sass-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator: {
                    filename: path.join('icons', '[name].[contenthash][ext]')
                }
            }
        ]
    }
};