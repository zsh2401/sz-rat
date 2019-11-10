import EnvLoader from "./EnvLoader";
import BootstrapLoader from "./bootstrap-loader";
export default{
    load,
    register
}

let loaders = new Array<EnvLoader>();
register(new BootstrapLoader());

async function load(target:string){
    let loader = loaders.find(loader=>loader.target === target);
    if(!loader){
        throw `the loader for ${target} was not found!`;
    }
    try{
        console.log(`loading ${target} efficiently`);
        await loader.loadEfficiently();
        console.log(`${target} loaded`);
    }catch(err){
        console.warn(`could not load ${target} with CDN,trying to use stable way`);
        await loader.loadStably();
        console.log(`${target} loaded`);
    }
}
function register(loader:EnvLoader){
    loaders.push(loader);
}
