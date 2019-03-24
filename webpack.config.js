const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: [
      '@babel/preset-env'
    ],
    plugins: [
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties'
    ]
  }
};

module.exports = {
  entry: './example/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/')
    }
  },
  module: {
    rules:  [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: babelLoader
      }, {
        test: /worker\.js$/,
        exclude: /node_modules/,
        use: ['worker-loader', babelLoader]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Canvas Example',
      template: require('html-webpack-template'),
      inject: false,
      appMountId: 'app'
    })
  ]
};
