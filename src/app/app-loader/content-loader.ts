export default async function(url:string,type?:"script" | "style"){
    if(!type){
        type = url.endsWith(".css") ? "style" : "script";
    }
    let rawText = await fetchText(url);
    let element = document.createElement(type);
    element.innerHTML = rawText;
    document.head.appendChild(element);
    await waitForRendered();
}
async function waitForRendered(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,0);
    })
}
async function fetchText(url:string):Promise<string>{
    return await (await fetch(url)).text();
}