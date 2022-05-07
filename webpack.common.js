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
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	],
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
};