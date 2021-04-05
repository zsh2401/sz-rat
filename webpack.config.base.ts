import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WebpackPwaManifest from "webpack-pwa-manifest"
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import WorkboxPlugin from "workbox-webpack-plugin"
import pkgInfo from "./package.json"
import BundleAnalyzerPlugin from "webpack-bundle-analyzer"

const config: webpack.Configuration = {
	entry: {
		app: path.resolve(__dirname, './src/AppLoader.ts'),
		"404": path.resolve(__dirname, './src/404redirector.ts')
	},

	output: {
		filename: 'js/[name].bundle.[hash].js',
		chunkFilename: 'js/[name].chunk.[hash].js',
		path: path.resolve(__dirname, './dist'),
		publicPath: "/",
	},

	module: {
		rules: [
			{ test: /\.(ts|tsx)?$/, loader: 'ts-loader' },

			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'  // Put css to <style/>
					},
					{
						loader: 'css-loader?modules=true'    // parse css
					}
				]
			},

			{
				test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)?$/,
				use: {
					loader: 'url-loader?limit=100000&name=images/[name]_[hash:8].[ext]'
				}
			},
		]
	},
	// externals: helper.EXTERNALS,

	plugins: [

		new webpack.ProgressPlugin(),

		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "./src/AppPage.html"),
			favicon: path.resolve(__dirname, "assets/icons/icon.ico"),
			minify: { // 压缩HTML文件
				removeComments: true, // 移除HTML中的注释
				collapseWhitespace: true, // 删除空白符与换行符
				minifyCSS: true// 压缩内联css
			},
			chunks: ["app"]
		}),

		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "./src/AppPage.html"),
			favicon: path.resolve(__dirname, "assets/icons/icon.ico"),
			filename: "404.html",
			title: "404redictor",
			minify: { // 压缩HTML文件
				removeComments: true, // 移除HTML中的注释
				collapseWhitespace: true, // 删除空白符与换行符
				minifyCSS: true// 压缩内联css
			},
			chunks: ["404"]
		}),

		//@ts-ignore
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "./public"),
					to: path.resolve(__dirname, "./dist")
				},
				{
					from: path.resolve(__dirname, "./assets"),
					to: path.resolve(__dirname, "./dist/assets")
				}
			]
		}),

		//@ts-ignore
		new CleanWebpackPlugin(),

		//@ts-ignore
		// new BundleAnalyzerPlugin({
		// 	analyzerMode:"static"
		// }),

		//https://stackoverflow.com/questions/65018431/webpack-5-uncaught-referenceerror-process-is-not-defined
		new webpack.ProvidePlugin({
			process: 'process/browser',
		}),

		//@ts-ignore
		new WebpackPwaManifest({
			name: pkgInfo.name,
			short_name: pkgInfo.name,
			description: pkgInfo.description,
			background_color: "#ffffff",
			icons: [
				{
					src: path.resolve(__dirname, "assets/icons/icon.png"),
					destination: "icons/uni",
					sizes: [96, 128, 192, 256, 384, 512],
				},
				{
					src: path.resolve(__dirname, "assets/icons/apple-icon.png"),
					destination: "icons/apple",
					size: 152,
					ios: true
				},

			],
		}),

		new WorkboxPlugin.GenerateSW({ swDest: "js/sw.js" }),
	],

	optimization: {
		splitChunks: {
			chunks: 'async',
			minSize: 20000,
			minRemainingSize: 0,
		}
	},

	
	devServer: {
		contentBase: path.join(__dirname, './dist'),
		open: false,
		host: "0.0.0.0",
		port: 5000,
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.css', '.jpg', '.png', '.ico', '.gif', '.json']
	}
};

export default config;