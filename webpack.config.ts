import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import OfflinePlugin from "offline-plugin"
import CopyWebpackPlugin from 'copy-webpack-plugin'

const config:webpack.Configuration =  {
	mode: "development",

	entry: './src/app/App.ts',

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{test: /\.(ts|tsx)?$/,loader: 'ts-loader',},

			{test: /\.(html)$/, loader: "html-loader"},

			{test: /\.(css)$/,use: [
				{loader: "style-loader"}, 
				{loader: "css-loader",options: {modules: true}}]},

			{ test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)?$/, 
				use: {
					loader:'url-loader?limit=100000&name=images/[name]_[hash:8].[ext]'
				}
			},
		]
	},

	plugins: [
		new webpack.ProgressPlugin(), 
		new HtmlWebpackPlugin({
			template:"./src/app/App.html"
		}),
		new CopyWebpackPlugin([
			{from:path.resolve(__dirname,"./src/assets/public") ,to:path.resolve(__dirname,"./dist")}
		]),
		new OfflinePlugin()
	],

	
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	//@ts-ignore
	devServer: {
		open: true,
		port : 35672,
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js','.css']
	}
};

export default config;