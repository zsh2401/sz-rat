/**
 * Provides some useful debug information
 * 
 */
import packageInfo from "../../../package.json";
declare const ___COMPILE_UNIX_TIMESTAMP:number;
const DEV_STR = "development"
const PROD_STR = "production"
enum CompileType {
    Development = "development",
    Production = "production"
}
function isDev(): boolean {
    return process.env.NODE_ENV === CompileType.Development;
}
export function getRawPkgInfo(): any {
    return packageInfo;
}
export default {
    IS_DEV: isDev(),

    VERSION: packageInfo.version,
    NAME: packageInfo.name,
    DESCRIPTION: packageInfo.description,
    AUTHOR: packageInfo.author,
    COMPILED_UNIX_TIMESTAMP: ___COMPILE_UNIX_TIMESTAMP,

    SZ_RAT_VERSION: packageInfo.sz_rat.version,
    SZ_RAT_VNAME: packageInfo.sz_rat.vname,
    SZ_RAT_DESC: packageInfo.sz_rat.description,
    SZ_RAT_REPO: packageInfo.sz_rat.repo,
    SZ_RAT_AUTHOR: "zsh2401",
}
