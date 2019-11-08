export const DEV_SERVER_PORT = 5000;
export const VENDORS = (()=>{
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
})()