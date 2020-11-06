const path = require("path");


module.exports = {
    entry: {
      app: "./src/index.js"
    },
    output: {
      path: path.resolve(__dirname + '/public/js'),
      filename: "[name].js"
    },
      devServer: {
      contentBase: __dirname + '/public',
      port: 3000,
      publicPath: '/js/'
    },
    devtool: "eval-source-map",
    mode: 'development',
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: "eslint-loader"
      }, {
        test: /\.css$/,
        loader: ["style-loader","css-loader"]
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
       }]
    }
  };