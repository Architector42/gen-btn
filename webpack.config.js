const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';
const plugins = [
  new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
  }),

  new webpack.HotModuleReplacementPlugin()
];


if (NODE_ENV === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        drop_debugger: true,
        unsafe: true
      },

      output: {
        comments: false
      }
    })
  );
}

module.exports = {
  context: __dirname + '/src',

  entry: {
    index: './index'
  },

  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'main.js'
  },

  devtool: NODE_ENV === 'development' ? 'cheap-module-inline-source-map' : false,
  watch: NODE_ENV === 'development',

  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      actions: path.resolve(__dirname, './src/actions'),
      config: path.resolve(__dirname, './src/config')
    },
    modules: ['node_modules'],
    extensions: ['*', '.js', '.jsx']
  },

  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['-loader'],
    extensions: ['*', '.js', '.jsx']
  },

  plugins,

  // module: {
  //   rules: [
  //     {
  //       test: /\.jsx?$/,
  //       exclude: /node_modules/,
  //       use: [ 'babel', 'eslint']
  //     },

  //     {
  //       test: /\.css$/,
  //       use: [ 'style', 'css' ]
  //     }
  //   ]
  // },

  devServer: {
    contentBase: __dirname + '/public',
    host: 'localhost',
    port: '3001',
    hot: true
  }
};

console.log('Run port 3001');
