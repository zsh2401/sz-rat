import EnvLoader from './env-loader/'
import OfflinePluginRuntime from 'offline-plugin/runtime'
import debugMx from '../common/debug-mx';

installSW();
loadApp();

function installSW(){
    //install service worker if it's dev env
    if(!debugMx.IS_DEV){
        console.log("Installing sw.js")
        OfflinePluginRuntime.install();
        console.log("Installed sw.js")
    }
}
async function loadApp(){
    if(/#[\/]?$/.test(window.location.hash)){
        console.log("is index page");
        await awaiter(1000);
    }
    await EnvLoader.load("bootstrap");
    await import(/*webpackChunkName:"real-app"*/"./App");
}
function awaiter(ms:number):Promise<any>{
    return new Promise(resolve=>setTimeout(resolve,ms));
}
