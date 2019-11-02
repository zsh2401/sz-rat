import objectKeeper from "../object-keeper";
import {History,createHashHistory} from 'history'
const OBJ_SAVE_KEY = "hsm";
export default function get(){
    if(!objectKeeper.get<History>(OBJ_SAVE_KEY)){
        objectKeeper.save(OBJ_SAVE_KEY,createHashHistory())
    }
    return objectKeeper.get<History>(OBJ_SAVE_KEY);
}
export function push(url:string){
    get().push(url);
}