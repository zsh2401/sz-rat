import { History, createHashHistory } from 'history'
let historyInstance:History<any> = createHashHistory();
function get(){
    return historyInstance;
}
function set(history:History<any>){
    historyInstance = history;
}
export default {
    get,set
}