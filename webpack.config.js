const path = require("path");

module.exports = {
	entry: path.resolve("./src/index.js"),
	output: {
		path: path.resolve(__dirname, "dist/assets"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							implementation: require("sass"),
						},
					},
				],
			},
		],
	},
	devServer: {
		contentBase: path.resolve(__dirname, "dist"),
		publicPath: "/assets/",
	},
};
