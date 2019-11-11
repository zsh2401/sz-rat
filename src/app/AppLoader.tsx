import OfflinePluginRuntime from 'offline-plugin/runtime'
import externalLoader from './external-loader';

installSWIfNeed();
loadApp();

function installSWIfNeed(){
    //install service worker if it's production env
    if(process.env.NODE_ENV === "production"){
        console.log("Installing sw.js")
        OfflinePluginRuntime.install();
        console.log("Installed sw.js")
    }
}
async function loadApp(){
    //@ts-ignore
    let promises = __CDN_RES.map((url:string)=>externalLoader.auto(url));
    await waitIfNeed();
    await Promise.all(promises);
    await import(/*webpackChunkName:"real-app"*/"./App")
}
async function waitIfNeed(){
    if(/#[\/]?$/.test(window.location.hash)){
        console.log("is index page");
        await awaiter(1000);
    }
}
function awaiter(ms:number):Promise<any>{
    return new Promise(resolve=>setTimeout(resolve,ms));
}
