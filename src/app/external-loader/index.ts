export default {
    fetchAndLoadScript,
    fetchAndLoadStyle,
    auto,
}
async function auto(url:string){
    if(url.endsWith(".js")){
        await fetchAndLoadScript(url);
    }else{
        await fetchAndLoadStyle(url);
    }
}
async function fetchAndLoadScript(url:string){
    if(process.env.NODE_ENV === "development"){
        console.log('[EXT-LOADER.SCRIPT]::Loading>'+url);
    }
    await load("script",await fetchText(url));
    // console.log('[EXT-LOADER.SCRIPT]::Loaded');
}
async function fetchAndLoadStyle(url:string){
    if(process.env.NODE_ENV === "development"){
        console.log('[EXT-LOADER.STYLE]::Loading>' + url);
    }
    await load("style",await fetchText(url));
    // console.log('[EXT-LOADER.STYLE]::Loaded');
}
async function load(type:"script" | "style",content:string){
    let element = document.createElement(type);
    element.type = type === "script" ? "text/javascript" : "text/css";
    element.innerHTML = content;
    document.head.appendChild(element);
    await waitForRepainted();
}
function waitForRepainted(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,0);
    })
}
async function fetchText(url:string){
    return await (await fetch(url)).text();
}