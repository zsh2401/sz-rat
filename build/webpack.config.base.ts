import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import OfflinePlugin from "offline-plugin"
import CopyWebpackPlugin from 'copy-webpack-plugin'
import ParallelUglifyPlugin  from 'webpack-parallel-uglify-plugin'
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
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{test: /\.(ts|tsx)?$/,loader: 'ts-loader',},

			{test: /\.(html)$/, loader: "html-loader"},
			{
                test: /\.css$/,
                use: [
                     {
                         loader: 'style-loader'  // 可以把css放在页面上
                     },
                     {
                         loader: 'css-loader'    // 放在后面的先被解析
                     }
                ]
            },

			{ test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)?$/, 
				use: {
					loader:'url-loader?limit=100000&name=images/[name]_[hash:8].[ext]'
				}
			},
		]
	},

	plugins: [
		// new ParallelUglifyPlugin({
		// 	// 传递给 UglifyJS的参数如下：
		// 	uglifyJS: {
		// 	  output: {
		// 		/*
		// 		 是否输出可读性较强的代码，即会保留空格和制表符，默认为输出，为了达到更好的压缩效果，
		// 		 可以设置为false
		// 		*/
		// 		beautify: false,
		// 		/*
		// 		 是否保留代码中的注释，默认为保留，为了达到更好的压缩效果，可以设置为false
		// 		*/
		// 		comments: false
		// 	  },
		// 	  compress: {
		// 		/*
		// 		 是否在UglifyJS删除没有用到的代码时输出警告信息，默认为输出，可以设置为false关闭这些作用
		// 		 不大的警告
		// 		*/
		// 		warnings: false,
	  
		// 		/*
		// 		 是否删除代码中所有的console语句，默认为不删除，开启后，会删除所有的console语句
		// 		*/
		// 		drop_console: true,
	  
		// 		/*
		// 		 是否内嵌虽然已经定义了，但是只用到一次的变量，比如将 var x = 1; y = x, 转换成 y = 5, 默认为不
		// 		 转换，为了达到更好的压缩效果，可以设置为false
		// 		*/
		// 		collapse_vars: true,
	  
		// 		/*
		// 		 是否提取出现了多次但是没有定义成变量去引用的静态值，比如将 x = 'xxx'; y = 'xxx'  转换成
		// 		 var a = 'xxxx'; x = a; y = a; 默认为不转换，为了达到更好的压缩效果，可以设置为false
		// 		*/
		// 		reduce_vars: true
		// 	  }
		// 	}
		// }),
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
					test: /[\\/]node_modules[\\/]/
				}
			},
			chunks: 'initial',
			minChunks: 1,
			minSize: 30000,
		}
	},

	//@ts-ignore
	devServer: {
		open: true,
		host:"0.0.0.0",
		port : 35672,
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js','.css']
	}
};

export default config;