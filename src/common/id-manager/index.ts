import objectKeeper from "../object-keeper";
export type Id = string;
export interface IdRecorder{
    [key:string]:boolean;
}
export default {
    allocate,
    free,
    readAll,
}
function readAll():Array<Id>{
    return _getRecordArray()
}
function allocate():Id{
    let id:Id;
    do{
        id = _generateId();
    }while(_wasUsed(id))
    _record(id);
    return id;
}
function free(id:Id){
    _remove(id);
}

function _generateId():Id{
    let id:number =  Math.ceil(Math.random()* 100000000);
    return "__random_tmp_id_" + id;
}
function _getRecordArray():Array<Id>{
    if(!objectKeeper.get<Array<Id>>("id-g-result"))
        objectKeeper.save("id-g-result",[]);
    return objectKeeper.get<Array<Id>>("idg-record");
}
function _wasUsed(id:Id):boolean{
    return _getRecordArray().includes(id);
}
function _remove(id:Id){
    let index = _getRecordArray().indexOf(id);
    if(index >= 0){
        _getRecordArray().splice(index,1);
    }
}
function _record(id:Id){
    _getRecordArray().push(id);
}


