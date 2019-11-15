/**Do not use React 
 * Pure JavaScript implenmented
*/
const GLOBAL_PACE_ID = "__global-pace"
export async function initGlobalPace(){

    let wrapper = document.getElementById(GLOBAL_PACE_ID) as HTMLDivElement;
    let inner = document.createElement("div");
    wrapper.appendChild(inner);

    wrapper.style.position = "fixed";
    wrapper.classList.add("__global-pace-wrapper");
    wrapper.style.width = "100%";
    wrapper.style.height = "2px";

    inner.className="__global-pace-inner"
    inner.style.backgroundImage = "linear-gradient( 135deg, #2AFADF 10%, #4C83FF 100%)";
    inner.style.width = "0%";
    inner.style.height = "100%"

    await new Promise(resolve=>setTimeout(resolve,0));
}
export function getPercent():number{
    let element = document.getElementsByClassName("__global-pace-inner")[0] as HTMLDivElement;
    let widthString = element.style.width;
    return +widthString.slice(0,widthString.length-1);
}
export async function updateProgress(percent:number){
    return new Promise((resolve,reject)=>{
        if(percent > 100)percent = 0;

        let element = document.getElementsByClassName("__global-pace-inner")[0] as HTMLDivElement;

        let widthString = element.style.width;
        let crtPercent = +widthString.slice(0,widthString.length-1);
        
        playNextFrame(element,crtPercent,percent,resolve);
    });
}
function playNextFrame(innerElement:HTMLDivElement,crtPercent:number,targetPercent:number,callback:()=>void){
    if(targetPercent === 0 || crtPercent === 100){
        innerElement.style.width = "0%";
        callback();
        return;
    }
    else if(crtPercent > targetPercent){
        crtPercent--;
    }else if(crtPercent < targetPercent){
        crtPercent++;
    }else{
        callback();
        return;
    }
    innerElement.style.width = crtPercent + "%";
    requestAnimationFrame(()=>{
        playNextFrame(innerElement,crtPercent,targetPercent,callback);
    })
}