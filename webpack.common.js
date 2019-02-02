var styleLintPlugin = require("stylelint-webpack-plugin");
var path = require("path");

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader", "eslint-loader"]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js"
	},
	plugins: [
		new styleLintPlugin({
			configFile: ".stylelintrc",
			context: "src",
			files: "**/*.scss",
			failOnError: false,
			quiet: false,
			syntax: "scss"
		})
	]
};
