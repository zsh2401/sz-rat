import objectKeeper from "../object-keeper";
import {History,createHashHistory} from 'history'
const OBJ_SAVE_KEY = "hs_provider";
export default function(){
    if(!objectKeeper.get<History>(OBJ_SAVE_KEY)){
        objectKeeper.save(OBJ_SAVE_KEY,createHashHistory())
    }
    return objectKeeper.get<History>(OBJ_SAVE_KEY);
}