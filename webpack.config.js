const path = require('path');

module.exports = {
  mode: 'development', // productionもある。devlopmentの方がbuildが早かったりする
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'public'), //出力先の設定、絶対パス
    filename: 'js/bundle.js', // 出力するファイル名
  },
};