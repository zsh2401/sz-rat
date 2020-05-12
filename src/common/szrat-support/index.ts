import packageInfo from "../../../package.json";

export function getSzRatVersion(){
    return require('../../../package.json')["sz-rat"].version;
}
//Debug
export const DEV_STR = "development"
export const PROD_STR = "production"
function isDev():boolean{
    return process.env.NODE_ENV !== PROD_STR;
}
export default {
    IS_DEV : isDev(),
    VERSION_NAME : packageInfo.version,
    PKG_NAME :packageInfo.name,
    DESC: packageInfo.description,
    SZ_RAT_VERSION : packageInfo.szratversion,
    PKG_INFO : packageInfo
}
export function saveObject(id:string,value:any){}
export function getObject(){}