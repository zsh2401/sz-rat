export default {
    fetchAndLoadScript,
    fetchAndLoadStyle,
    auto,
}
async function auto(url:string){
    if(url.endsWith(".js")){
        fetchAndLoadScript(url);
    }else{
        fetchAndLoadStyle(url);
    }
}
async function loadStyle(style:string){
    load("style",style);
}
async function loadScript(script:string){
    load("script",script);
}
async function fetchAndLoadScript(url:string){
    loadScript(await fetchText(url));
}
async function fetchAndLoadStyle(url:string){
    loadStyle(await fetchText(url));
}
async function load(type:"script" | "style",content:string){
    let element = document.createElement(type);
    element.type = type === "script" ? "text/javascript" : "text/css";
    element.innerHTML = content;
    document.head.appendChild(element);
}
async function fetchText(url:string){
    return await (await fetch(url)).text();
}