const DEV_STR = "development"
function isDev():boolean{
    return process.env.NODE_ENV === DEV_STR;
}
export default{
    IS_DEV : isDev()
}