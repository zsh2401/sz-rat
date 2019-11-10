export default abstract class EnvLoader{
    abstract target:string;

    abstract async loadEfficiently():Promise<any>;
    abstract async loadStably():Promise<any>;

    protected async fetchText(url:string){
        return await (await fetch(url)).text();
    }
    protected loadStyle(css:string){
        EnvLoader.appendToHead("style",css);
    }
    protected loadScript(js:string){
        EnvLoader.appendToHead("script",js);
    }
    private static appendToHead(type:"script" | "style",content:string){
        let newElement = document.createElement(type);
        newElement.type = type === "script" ? "text/javascript" : "text/css";
        newElement.innerHTML = content;
        document.head.appendChild(newElement);
    }
}