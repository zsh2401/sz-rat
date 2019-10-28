const DEV_STR = "development"
const PROD_STR = "production"
function isDev():boolean{
    return process.env.NODE_ENV !== PROD_STR;
}
import packageInfo from "../../../package.json";
export default {
    IS_DEV : isDev(),
    VERSION_NAME : packageInfo.version,
    PKG_NAME :packageInfo.name,
    DESC: packageInfo.description,
    SZ_RAT_VERSION : packageInfo.szratversion
}