const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
	mode: "development",
	devtool: "cheap-module-source-map",
	entry: {
		popup: path.resolve("./src/popup/index.tsx"),
		background: path.resolve("./src/background/background.ts"),
		// add
		options: path.resolve("./src/options/index.tsx"),
		//
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	module: {
		rules: [
			{
				use: "ts-loader",
				test: /\.tsx/,
				exclude: /node_modules/,
			},
			{
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								indent: "postcss",
								plugins: [tailwindcss, autoprefixer],
							},
						},
					},
				],
				test: /\.css$/i,
			},
		],
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve("src/static"),
					to: path.resolve("dist"),
				},
			],
		}),
		new HtmlWebpackPlugin({
			title: "react Chrome extension",
			filename: "popup.html",
			chunks: ["popup"],
		}),
		new HtmlWebpackPlugin({
			title: "react Chrome extension",
			filename: "options.html",
			chunks: ["options"],
		}),
	],
	output: {
		filename: "[name].js",
	},
};
