const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",

  entry: "./src/js/index.js", //main js file
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },

  devServer: {
    overlay: true,
    contentBase: './dist' //start localhost dir
  },
  //developer: "inline-source-map",
  module: {
    rules: [{
        test: /\.m?js$/,
        //exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, 'src/js'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
           'sass-loader'
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{
          loader: 'file-loader',
          options: {

            //publicPath: "./src/img/",
            name: 'img/[name].[ext]'
          }
        }, ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].css',
      chunkFilename: '[id].css',
    })
  ]
}