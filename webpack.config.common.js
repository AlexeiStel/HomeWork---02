const path = require( 'path');
const HTMLWebpackPlugin = require( 'html-webpack-plugin');
const CopyPlugin = require( 'copy-webpack-plugin');
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name][ext]',
        "clean": true
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname,'public/index.html')
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'public/favicon.png'),
                to: path.resolve(__dirname,'dist')
            }]
        }),
        new MiniCssExtractPlugin(),
    ], 
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },  
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpg|svg)$/i,
                use: [
                    {
                    loader: 'file-loader',
                    options: {
                        name: './assets/images/[name].[hash].[ext]', 
                        },
                    },
                ],
            },
            {
                test: /\.[tj]sx?$/i,
                use: 'ts-loader', 
                exclude: /node_modules/,
            },  
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(mp3)$/, 
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',  
                            outputPath: 'assets/audio/',  
                        },
                    },
                ],
            },              
        ]
    }
}