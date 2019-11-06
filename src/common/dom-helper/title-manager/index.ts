import objectKeeper from "../../object-keeper";
import debugMx from "../../debug-mx";

export default {
    push,
    pop
}

const KEY = "dom-helper-titles";
function defaultArrayFactory():Array<string>{
    return [debugMx.PKG_NAME];
}
function reloadTArray(){
    objectKeeper.put(KEY,defaultArrayFactory());
}
function updateTitle(){
    let titles = objectKeeper.auto<Array<string>>(KEY,defaultArrayFactory);
    document.title = titles[titles.length - 1];
}
function push(newTitle:string){
    objectKeeper.auto<Array<string>>(KEY,defaultArrayFactory)
        .push(newTitle);
    updateTitle();
}
function pop():string{
    let tArray:Array<string> = objectKeeper.auto<Array<string>>(KEY,defaultArrayFactory);
    try{
        return tArray.pop() || debugMx.PKG_NAME
    }catch(err){
        reloadTArray();
        console.log("Can not upate title",err);
        return debugMx.PKG_NAME;
    }finally{
        if(tArray.length === 0){
            reloadTArray();
        }
        updateTitle();
    }
}