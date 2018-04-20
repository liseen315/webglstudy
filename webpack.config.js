const path = require('path')
const webpack = require('webpack')
const ROOT = process.cwd()
const ENV = process.env.NODE_ENV
const IsProduction = (ENV === 'production') ? true : false
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Glob = require('glob')

function getEntry(globPath) {
  let entries = {};
  Glob.sync(globPath).forEach(function (entry) {
    let basename = path.basename(entry, path.extname(entry)),
        pathname = path.dirname(entry)
    entries[pathname.slice(6,pathname.length) +'/'+ basename] = path.resolve(ROOT,pathname + '/' + basename + '.ts')
  })
  return entries
}

function getEntryHtml (globPath) {
	let entries = [];
	Glob.sync(globPath).forEach(function (entry) {
		let basename = path.basename(entry, path.extname(entry)),
      pathname = path.dirname(entry);
		entries.push({
      filename: entry.split('/').splice(2).join('/'),
      template: entry.slice(6,entry.length),
      inject: false,
		});

	});
	return entries;
}

let entryJs = getEntry('./src/**/*.ts')
let entryHtml = getEntryHtml('./src/**/*.html')
let configPlugins = []
// html
entryHtml.forEach(function (v) {
	configPlugins.push(new HtmlWebpackPlugin(v));
});

const config = {
  entry: entryJs,
  context: path.resolve(ROOT, 'src'),
  output: {
    filename: '[name].js?[chunkhash:8]',
		chunkFilename: '[name].js?[chunkhash:8]',
		path: path.resolve(ROOT, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      }
    ]
  },
  plugins: configPlugins,
  devServer: {
    host: '127.0.0.1',
    compress: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: 2017,
  },
  resolve: {
    extensions: [ '.ts', '.tsx', ".js", ".json" ]
  },
}

module.exports = config

