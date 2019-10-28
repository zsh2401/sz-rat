const DEV_STR = "development"
const PROD_STR = "production"
function isDev():boolean{
    return process.env.NODE_ENV !== PROD_STR;
}
function getVersion():string{
    return require("../../../package.json").version;
}
function getPkgName():string{
    return require("../../../package.json").name;
}
function getDescription():string{
    return require("../../../package.json").description;
}
export default {
    IS_DEV : isDev(),
    VERSION_NAME : getVersion(),
    PKG_NAME : getPkgName(),
    DESC: getDescription(),
}