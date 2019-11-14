import OfflinePluginRuntime from 'offline-plugin/runtime'
import Pace from '../../common/view-helper/pace'

(async ()=>{
    let pace = new Pace(document.querySelector("#pace") as HTMLDivElement);
    pace.updateProgress(10);
    installSWIfNeed();
    pace.updateProgress(30);
    await waitIfNeed(1000);
    pace.updateProgress(60);
    await loadApp();
    pace.updateProgress(100);
})();

function installSWIfNeed(){
    if(process.env.NODE_ENV === "production"){
        OfflinePluginRuntime.install();
    }
}
async function loadApp(){
    await import(/*webpackChunkName:"app"*/"../App")
}
async function waitIfNeed(ms:number=1500){
    if(/#[\/]?$/.test(window.location.hash)){
        await new Promise(resolve=>setTimeout(resolve,ms));
    }
}
