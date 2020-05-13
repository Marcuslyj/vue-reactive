const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const path = require('path')

console.log('path.resolve', path.resolve('./docs'))
module.exports = {
  mode: 'production',
  entry: [ './public/example.js'], // './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./docs')
  },
  plugins: [
    // 清理构建目录，output路径
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // 打包输出HTML
      title: 'Reactive',
      filename: 'index.html',
      template: 'public/index.html'
    })
  ]
}
