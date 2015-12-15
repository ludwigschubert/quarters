var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: [
    'webpack/hot/only-dev-server',
    './js/index.jsx',
    'bootstrap-sass!./styles/bootstrap-sass.config.js'
  ],

  output: {
    path: __dirname + '/public',
    filename: "bundle.js",
  },

  resolve: {
      alias: {
          "react": __dirname + '/node_modules/react',
          "react/addons": __dirname + '/node_modules/react/addons',
      }
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      },
      {
          test: /\.s(c|a)ss$/,
          loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader?name=img/img-[hash:6].[ext]"
      },
      {
        test: /bootstrap-sass\/assets\/javascripts\//,
        loader: 'imports?jQuery=jquery'
      },
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Quarters',
      template: 'index.html' // simply copies our index.html file to output directory
    })
  ],

};
