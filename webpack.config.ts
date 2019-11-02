import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import OfflinePlugin from "offline-plugin"
import CopyWebpackPlugin from 'copy-webpack-plugin'

const getVendors = ()=>{
	let vendors:string[] = [];
	let dependencies = require("./package.json").dependencies;
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
		app:'./src/app/App.ts',
		notfound:"./src/app/NotFound.tsx"
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{test: /\.(ts|tsx)?$/,loader: 'ts-loader',},

			{test: /\.(html)$/, loader: "html-loader"},

			// {
			// 	test: /\.css$/,
			// 	loader: 'css-loader',
			// 	options: {
			// 	  modules: true,
			// 	},
			// },
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
		new webpack.ProgressPlugin(), 
		new HtmlWebpackPlugin({
			template:"./src/app/App.html",
			chunks:["vendors","app"]
		}),
		new HtmlWebpackPlugin({
			template:"./src/app/App.html",
			filename:"404.html",
			chunks:["vendors","notfound"]
		}),
		new CopyWebpackPlugin([
			{
				from:path.resolve(__dirname,"./src/assets/public") ,
				to:path.resolve(__dirname,"./dist")
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