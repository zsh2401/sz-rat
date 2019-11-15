// console.log("wtf");
import OfflinePluginRuntime from 'offline-plugin/runtime'
import * as topPace from '../../common/view-helper/top-pace'

(async ()=>{
    await topPace.initGlobalPace();

    await topPace.updateProgress(20);
    installSWIfNeed();
    await topPace.updateProgress(40);
    
    if(thereIsHomePage()){
        await wait(1000);
    }
    
    await topPace.updateProgress(70);
    await loadApp();
    await topPace.updateProgress(100);
})();

function installSWIfNeed(){
    if(process.env.NODE_ENV === "production"){
        OfflinePluginRuntime.install();
    }
}
async function loadApp(){
    await import(/*webpackChunkName:"app"*/"../App")
}
function thereIsHomePage(){
    return /#[\/]?$/.test(window.location.hash);
}
async function wait(ms:number=1500){
    await new Promise(resolve=>setTimeout(resolve,ms));
}
