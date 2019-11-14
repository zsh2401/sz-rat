export default async function(type:"script" | "style",content:string){
    let element = document.createElement(type);
    element.innerHTML = content;
    document.head.appendChild(element);
    await waitForRendered();
}
async function waitForRendered(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,0);
    })
}