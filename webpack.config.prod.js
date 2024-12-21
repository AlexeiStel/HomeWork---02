const { merge } = require( 'webpack-merge');
const CssMinimizerPlugin = require( 'css-minimizer-webpack-plugin');
const TerserPlugin = require( 'terser-webpack-plugin');

const commonConfig = require( './webpack.config.common.js');

module.exports = merge(commonConfig, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    }
})