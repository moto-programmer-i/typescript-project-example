const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 参考
// https://webpack.js.org/guides/production/
// https://webpack.js.org/guides/typescript/
module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),

    // 外部ライブラリの権利情報HTML
		new HtmlWebpackPlugin({
			template: './src/third-party-licenses.html',
      filename: 'third-party-licenses.html',
      // 表示だけのHTMLなので、bundle.jsは不要
      inject: false
		})
	],
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
};