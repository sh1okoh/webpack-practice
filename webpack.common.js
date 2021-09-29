const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // productionもある。devlopmentの方がbuildが早かったりする
  entry: { 
    app: './src/js/app.js',
    another: './src/js/another.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'), //出力先の設定、絶対パス
    filename: 'js/[name].bundle.js', // 出力するファイル名
    chunkFilename: 'js/[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'initial',
      name: 'vendor',
    }
  },
  plugins: [
    new CleanWebpackPlugin({
      // cleanOnceBeforeBuildPatterns: ['**/*', '!**.html'],
    }),
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      filename: 'another.html',
      template: './src/html/another.html',
      chunks: ['another'], // これを指定しないとapp.jsとanother.jsを読み込んだbundleファイルが出力される
    })
  ]
};