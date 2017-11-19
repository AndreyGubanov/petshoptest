import express from 'express';
import path from 'path';

const PORT = 3000;
const DIST = __dirname + '/dist';
const server = express();

const isDev = process.env.NODE_ENV === 'dev';


if (isDev) {
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config.babel').default;
    const compiler = webpack(webpackConfig);

    server.use(require('webpack-dev-middleware') (compiler, {
        hot: true,
        stats: {
            color: true,
        }
    }));
    server.use(require('webpack-hot-middleware')(compiler));

} else {
    server.use(express.static(DIST));
}

server.all('*', function (req, res) {
    res.sendFile(path.resolve(DIST, 'index.html'));
});

server.listen(PORT, function(){
   console.log('Server started at port :' + PORT)
});

console.log('------------------------');
console.log(process.env.NODE_ENV +' build running...')
console.log('------------------------');