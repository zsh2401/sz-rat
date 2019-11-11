import webpack from 'webpack'
export const DEV_SERVER_PORT = 5000;
export const CDN_RES = [
	"https://cdn.bootcss.com/react/16.10.2/umd/react.production.min.js",
    "https://cdn.bootcss.com/react-dom/16.10.2/umd/react-dom.production.min.js",
    "https://cdn.jsdelivr.net/npm/react-router-dom@5.1.2/umd/react-router-dom.min.js",
        
    "https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
];
export const EXTERNALS:webpack.ExternalsElement | webpack.ExternalsElement[] = {
	"react":"React",
	"react-dom":"ReactDOM",
	"jquery":"$",
	"boostrap":"bootstrap"
}
export const VENDORS = (()=>{
	let vendors:string[] = [];
	let dependencies = require("../package.json").dependencies;
	for(let key in dependencies){
		if(key === "offline-plugin"){
			continue;
		}
		vendors.push(key);
	}
	return vendors;
})();
