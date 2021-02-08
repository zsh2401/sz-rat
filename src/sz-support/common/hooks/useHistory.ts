import { History, createHashHistory } from 'history'
let historyInstance:History<any>;
export default function useHistory(){
    if(!historyInstance){
        historyInstance = historyFactory();
    }
    return historyInstance;
}
const historyFactory = ()=> createHashHistory();