var path = require('path');
var webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const isProduction = false;
module.exports = {
    devtool: 'source-map',
    //debug: true,
    cache: true,
    // entry: ['webpack-hot-middleware/client', './client/index'],
    entry: ['webpack-hot-middleware/client', './client/index'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new DashboardPlugin()
    ],
    module: {
        loaders: [
            // js
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                //include: path.join(__dirname, 'client'),
                use: ['babel-loader']
            },
            // CSS
            {
                test: /\.styl$/,
                include: path.join(__dirname, 'client'),
                loader: 'style-loader!css-loader!stylus-loader'
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        compress: false,
        inline: true,
        //hot: true,
        disableHostCheck: true,
        stats: {
            assets: true,
            children: false,
            chunks: false,
            hash: false,
            modules: false,
            publicPath: false,
            timings: true,
            version: false,
            warnings: true,
            colors: {
                green: '\u001b[32m'
            }
        }
    }
};
