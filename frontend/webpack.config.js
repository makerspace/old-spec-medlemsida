const webpack = require('webpack');
const path = require('path');

// Get git info from command line
var commitHash = require("child_process")
	.execSync("git rev-parse --short HEAD")
	.toString();

// Get the build date
var options = {
	year: 'numeric', month: 'numeric', day: 'numeric',
	hour: 'numeric', minute: 'numeric', second: 'numeric',
	hour12: false
};
var buildDate = new Intl.DateTimeFormat('sv-SE', options).format(new Date());

module.exports = {
	context: __dirname + '/src',
	entry: './index.jsx',
	output:
	{
		path: path.resolve(__dirname, 'dist/js'),
		publicPath: '/js/',
		filename: 'bundle.js'
	},

	// Development server on http://localhost:8100/
	devServer: {
//		inline: true,
		contentBase: path.resolve(__dirname, 'dist'),
		port: 8108,
		historyApiFallback: {
			index: "index.html"
		}
	},

	// Include *.js and *.jsx files
	resolve: {
		extensions: [".js", ".jsx"]
	},

	// Preprocess *.jsx files
	module: {
		rules:
		[
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use:
				{
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				}
			},
		],
	},

	// Include build information (build date, git hash)
	plugins: [
		new webpack.DefinePlugin({
			__COMMIT_HASH__: JSON.stringify(commitHash),
			__BUILD_DATE__: JSON.stringify(buildDate),
		})
	]
};