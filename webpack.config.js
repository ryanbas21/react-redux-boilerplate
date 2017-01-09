const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
 devtool: 'eval-source-map',
 entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
	   path.join(__dirname, 'src/index')
   ],
 output: {
   path: path.join(__dirname, 'public/'),
   filename: 'bundle.js',
   publicPath: 'http://localhost:8080/'
 },
 plugins: [
     new ExtractTextPlugin('master.css', { allChunks: true }),
     new webpack.DefinePlugin({
     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
   }),
   new webpack.HotModuleReplacementPlugin()
 ],
 devServer: {
		contentBase: './',
		port: 8080,
		noInfo: false,
		hot: true,
		inline: true,
		proxy: {
			'/': {
				bypass: function (req, res, proxyOptions) {
					return '/public/index.html';
				}
			},
  //  		'**': { target: 'http://localhost:3000', secure: false }
		}
	},
 module: {
   loaders: [
     {
	   loader: 'babel-loader', query: { presets: ['react', 'es2015', 'react-hmre'] },
	   test: /\.jsx?$/,include: __dirname, exclude: /(node_modules|bower_components)/
     },
     { test: /\.json?$/, loader: 'json' },
	   {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      include: __dirname,
      query: {
        presets: [ 'es2015', 'react', 'react-hmre' ]
      }
    },
    { test: /\.css$/, loaders: ["style","css"] },
    { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] }
   ],
 },
 sassLoader: {
    includePaths: [path.resolve(__dirname, "./node_modules")]
  }
};
