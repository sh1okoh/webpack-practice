const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'development', // productionもある。devlopmentの方がbuildが早かったりする
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'public'), //出力先の設定、絶対パス
    filename: 'js/bundle.js', // 出力するファイル名
  },
  plugins: [
    new CleanWebpackPlugin({
      // cleanOnceBeforeBuildPatterns: ['**/*', '!**.html'],
    }),
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
    })
  ]
};