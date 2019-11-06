export default {
    put,
    get,
    exists,
    auto,
    VERSION:"0.5",
    NAME:"object-keeper"
}
export type Key = string;

function auto<TResult = any>(key:Key,factory:()=>TResult):TResult{
    let v = get(key);
    if((!v) && factory){
        v = factory();
        put(key,v);
        return v;
    }else{
        return v;
    }
}
function exists(key:Key):boolean{
    let v = get(key);
    return v ? true : false;
}
function put(key:Key,value:any){
    (window as any)[generateKey(key)] = value;
}
function get<TResult = any>(key:Key):TResult{
    return (window as any)[generateKey(key)] as TResult
}
function generateKey(srcKey:Key):string{
    return "__OBJ_KEEPER_" + srcKey;
}