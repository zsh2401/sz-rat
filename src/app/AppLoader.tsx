import OfflinePluginRuntime from 'offline-plugin/runtime'
import externalLoader from './external-loader';
import Pace from '../common/view-helper/pace'

(async function init(){
    let pace = new Pace(document.querySelector("#pace") as HTMLDivElement);
    pace.updateProgress(5);
    pace.updateProgress(10);
    installSWIfNeed();
    pace.updateProgress(30);
    await loadEnv();
    pace.updateProgress(90);
    await waitIfNeed(1000);
    await loadApp();
    pace.updateProgress(100);
})();

function installSWIfNeed(){
    if(process.env.NODE_ENV === "production"){
        console.log("Installing sw.js")
        OfflinePluginRuntime.install();
        console.log("Installed sw.js")
    }
}
async function loadEnv(){
    //@ts-ignore
    for(let i=0;i<__CDN_RES.length;i++){
        //@ts-ignore
        await externalLoader.auto(__CDN_RES[i]);
    }
}
async function loadApp(){
    await import(/*webpackChunkName:"real-app"*/"./App")
}
async function waitIfNeed(ms:number=1500){
    if(/#[\/]?$/.test(window.location.hash)){
        await new Promise(resolve=>setTimeout(resolve,ms));
    }
}
