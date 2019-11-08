import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import OfflinePlugin from "offline-plugin"
import CopyWebpackPlugin from 'copy-webpack-plugin'

const getVendors = ()=>{
	let vendors:string[] = [];
	let dependencies = require("../package.json").dependencies;
	for(let key in dependencies){
		if(key === "offline-plugin"){
			continue;
		}
		vendors.push(key);
	}
	vendors.push("bootstrap/dist/css/bootstrap.min.css");
	return vendors;
}

const config : webpack.Configuration =  {
	entry:{
		vendors:getVendors(),
		app:path.resolve(__dirname,'../src/app/App.ts') ,
		notfound:path.resolve(__dirname,'../src/app/NotFound.tsx') ,
	},

	output: {
		filename: '[name].bundle.[hash].js',
		chunkFilename: '[name].chunk.[hash].js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			{test: /\.(ts|tsx)?$/,loader: 'ts-loader',},

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
					loader:'url-loader?limit=10000000000&name=images/[name]_[hash:8].[ext]'
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
		port : 35672,
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js','.css','.jpg']
	}
};

export default config;