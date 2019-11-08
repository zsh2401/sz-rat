import path, { resolve } from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import OfflinePlugin from "offline-plugin"
import CopyWebpackPlugin from 'copy-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import * as helper from './helper'

const config : webpack.Configuration =  {
	entry:{
		app:path.resolve(__dirname,'../src/app/App.ts') ,
		notfound:path.resolve(__dirname,'../src/app/NotFound.tsx') ,
		vendors:helper.VENDORS,
	},

	output: {
		filename: '[name].bundle.[hash].js',
		chunkFilename: '[name].chunk.[hash].js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			{test: /\.(ts|tsx)?$/,loader: 'awesome-typescript-loader'},

			{test: /\.(html)$/, loader: "html-loader"},

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
	

	plugins: [
		new webpack.ProgressPlugin(), 
		new HtmlWebpackPlugin({
			template:path.resolve(__dirname,"../src/app/App.html"),
			chunks:["vendors","app"]
		}),
		new HtmlWebpackPlugin({
			template:path.resolve(__dirname,"../src/app/App.html"),
			filename:"404.html",
			chunks:["vendors","notfound"]
		}),
		new CopyWebpackPlugin([
			{
				from:path.resolve(__dirname,"../src/assets/public") ,
				to:path.resolve(__dirname,"../dist")
			}
		]),
		new OfflinePlugin()
	],

	
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					name:"vendors",
					priority: -10,
					chunks:'initial',
					test: /[\\/]node_modules[\\/]/
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			},
			name: true,
			chunks: 'all',
			minChunks: 1,
			minSize: 300000,
			maxSize:0
		}
	},

	//@ts-ignore
	devServer: {
		open: true,
		host:"0.0.0.0",
		port : helper.DEV_SERVER_PORT,
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js','.css','.jpg']
	}
};

export default config;