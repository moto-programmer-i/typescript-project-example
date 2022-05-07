// 参考 https://webpack.js.org/guides/production/
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	output: {
      // ブラウザキャッシュ対策に、ファイル名に内容のキャッシュをつける
      filename: 'bundle.[contenthash].js',

	  // distフォルダの中身を削除
	  clean: true
	}
});