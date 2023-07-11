module.exports = {
	mode: "development",
	devtool: "cheap-module-source-map",
	module: {
		//add
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
	//
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "[name].js",
	},
};
