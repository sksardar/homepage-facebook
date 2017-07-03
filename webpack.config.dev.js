var path = require('path');
var webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const nodeEnv = process.env.NODE_ENV || 'development';
const autoprefixer = require('autoprefixer');

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
        new DashboardPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(nodeEnv)
            }
        })
        // new webpack.LoaderOptionsPlugin({
        //     options: {
        //         postcss: [autoprefixer()]
        //     }
        // })
    ],
    module: {
        loaders: [
            // js
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'client'),
                use: ['babel-loader']
            },
            // CSS
            {
                test: /\.styl$/,
                include: path.join(__dirname, 'client'),
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    // Using source maps breaks urls in the CSS loader
                    // https://github.com/webpack/css-loader/issues/232
                    // This comment solves it, but breaks testing from a local network
                    // https://github.com/webpack/css-loader/issues/232#issuecomment-240449998
                    // 'css-loader?sourceMap',
                    'css-loader',
                    // 'postcss-loader',
                    'sass-loader?sourceMap'
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        compress: false,
        inline: true,
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
