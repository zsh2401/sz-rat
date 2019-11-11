import OfflinePluginRuntime from 'offline-plugin/runtime'
import externalLoader from './external-loader';

installSWIfNeed();
loadApp();

function installSWIfNeed(){
    if(process.env.NODE_ENV === "production"){
        console.log("Installing sw.js")
        OfflinePluginRuntime.install();
        console.log("Installed sw.js")
    }
}
declare const __CDN_RES:string[];
async function loadApp(){
    for(let i=0;i<__CDN_RES.length;i++){
        await externalLoader.auto(__CDN_RES[i]);
    }
    await waitIfNeed();
    await import(/*webpackChunkName:"real-app"*/"./App")
}
async function waitIfNeed(){
    if(/#[\/]?$/.test(window.location.hash)){
        // console.log("Here is index page");
        await new Promise(resolve=>setTimeout(resolve,1500));
    }
}
