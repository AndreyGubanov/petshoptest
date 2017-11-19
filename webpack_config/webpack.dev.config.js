import webpack from 'webpack';
import Config from 'webpack-config';


export default new Config().extend('webpack_config/webpack.base.config.js').merge({
    entry: [
        'webpack-hot-middleware/client?reload=true',
        __dirname + '/../client/entry.js'
    ],
    devtool: 'inline-source-map',
    output: {
       filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});