import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import OfflinePlugin from "offline-plugin"
import CopyWebpackPlugin from 'copy-webpack-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import {CleanWebpackPlugin} from 'clean-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import pkgInfo from '../package.json'
const IS_DEV = process.env.NODE_ENV === "development";
const config : webpack.Configuration =  {
	entry:{
		apppreloader:path.resolve(__dirname,'../src/app/app-preloader'),
		"404":path.resolve(__dirname,'../src/common/404redirector')
	},

	output: {
		filename: 'js/[name].bundle.[hash].js',
		chunkFilename: 'js/[name].chunk.[hash].js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			{test: /\.(ts|tsx)?$/,loader: 'awesome-typescript-loader'},

			{test: /\.(html)$/,
				loader:"html-loader"
			},

			{test: /\.(ejs)$/,
				loader:"ejs-loader"
			},

			{test: /\.css$/,
                use: [
                     {
                         loader: 'style-loader'  // Put css to <style/>
                     },
                     {
                         loader: 'css-loader'    // parse css
                     }
                ]
            },

			{test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)?$/, 
				use: {
					loader:'url-loader?limit=100000&name=images/[name]_[hash:8].[ext]'
				}
			},
		]
	},
	// externals: helper.EXTERNALS,

	plugins: [
		new webpack.ProgressPlugin(), 
		new HtmlWebpackPlugin({
			template:path.resolve(__dirname,"../src/app/AppPage.ejs"),
			minify: { // 压缩HTML文件
				removeComments: true, // 移除HTML中的注释
				collapseWhitespace: true, // 删除空白符与换行符
				minifyCSS: true// 压缩内联css
			},
			chunks:["apppreloader"]
		}),
		new HtmlWebpackPlugin({
			filename:"404.html",
			title:"404redictor",
			chunks:["404"]
		}),
		new CopyWebpackPlugin([
			{
				from:path.resolve(__dirname,"../src/assets/public") ,
				to:path.resolve(__dirname,"../dist")
			},
			{
				from:path.resolve(__dirname,"../src/app/icon/icon.ico") ,
				to:path.resolve(__dirname,"../dist/favicon.ico")
			},
			{
				from:path.resolve(__dirname,"../src/app/manifest.json") ,
				to:path.resolve(__dirname,"../dist/manifest.json")
			},
		]),
		new CleanWebpackPlugin(),
		// new BundleAnalyzerPlugin(),
		new OfflinePlugin({
			caches:"all",
			// externals:helper.CDN_RES
		})
	],

	
	optimization: {
		minimizer:[
			new UglifyJsPlugin({
                uglifyOptions: {
                    compress: true
                }
            })
		],
		splitChunks: {
			cacheGroups: {
				vendors: {
					name:"vendors",
					priority: -10,
					chunks:'initial',
					test: /[\\/]node_modules[\\/]/
				},
				// default:{
				// 	priority:10,
				// 	chunks:"async"
				// }
			},
			name: true,
			chunks: 'async',
			minChunks: 1,
			minSize: 300000,
			maxSize:0
		}
	},

	//@ts-ignore
	devServer: {
		open: false,
		host:"0.0.0.0",
		port : 5000,
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js','.css','.jpg']
	}
};

export default config;