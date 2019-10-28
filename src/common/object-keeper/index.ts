export default {
    save,
    get
}
function save(key:string,value:any){
    (window as any)[generateKey(key)] = value;
}
function get<TResult = any>(key:string):TResult{
    return (window as any)[generateKey(key)] as TResult
}
function generateKey(srcKey:string):string{
    return "__OBJ_KEEPER_" + srcKey;
}