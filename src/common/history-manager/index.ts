import objectKeeper from "../object-keeper";
import {History,createHashHistory} from 'history'
const OBJ_SAVE_KEY = "hsm";
/**Get the global history single instance */
export default function get(){
    if(!objectKeeper.get<History>(OBJ_SAVE_KEY)){
        objectKeeper.put(OBJ_SAVE_KEY,createHashHistory())
    }
    return objectKeeper.get<History>(OBJ_SAVE_KEY);
}
/**Push url */
export function push(url:string){
    get().push(url);
}