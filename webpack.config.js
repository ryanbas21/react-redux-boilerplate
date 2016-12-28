const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');

module.exports = {
 devtool: 'eval-source-map',
 entry: [
	   path.join(__dirname, 'src/index.js')
   ],
 output: {
   path: path.join(__dirname, 'public/'),
   filename: 'bundle.js',
   publicPath: 'http://localhost:8080/'
 },
 plugins: [
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
	   loader: 'babel-loader',
	   query: {
		 presets: ['react', 'es2015', 'react-hmre']
	   },
	   test: /\.jsx?$/,
	   exclude: /(node_modules|bower_components)/
   },
   {
    test: /\.json?$/,
    loader: 'json'
	},
	{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      include: __dirname,
      query: {
        presets: [ 'es2015', 'react', 'react-hmre' ]
      }
  },
  { test: /\.css$/, loaders: ["style","css"], }
   ],
 },
};
