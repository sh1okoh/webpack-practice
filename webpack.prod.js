const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false, // ライセンスコメントなどを抽出したファイルが出力されるのを防ぐ
        terserOptions: {
          compress: {
            drop_console: true, // console.logなどが出力されるのを防ぐ
          }
        }
      })
    ]
  }
})
