import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';

export default new Config().merge = ({
    devtool: 'eval',
    entry: './client/entry.js',
    output: {
        path: __dirname + './../dist',
    },

    module: {
        loaders : [
            { test: /\.vue$/, loader: 'vue-loader', options: { extractCSS: true } },
            { test: /.js$/, loader: 'babel-loader', exclude: /node_modules/},
            { test: /\.(css|sass|scss)$/,     use: ExtractTextPlugin.extract({ use: ['css-loader', 'sass-loader'], fallback: 'style-loader' }) },
            { test: /\.(eot|woff|ttf|svg|png|jpg)$/, loader: 'file-loader'},
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({ template: './client/index.html', inject: 'body' }),
        new ExtractTextPlugin({ filename: 'common.[chunkhash].css'}),
        new FriendlyErrorsPlugin()
    ]
});