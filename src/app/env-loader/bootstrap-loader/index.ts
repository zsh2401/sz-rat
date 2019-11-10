import EnvLoader from '../EnvLoader'
export default class BootstrapLoader extends EnvLoader{
    target = "bootstrap"
    async loadEfficiently(){
        let allResult = await Promise.all([
            this.fetchText("https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"),
            this.fetchText("https://cdn.bootcss.com/twitter-bootstrap/4.3.1/js/bootstrap.min.js"),
            this.fetchText("https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.min.css")
        ]);
        this.loadScript(allResult[0]);
        this.loadScript(allResult[1]);
        this.loadStyle(allResult[2]);
    }
    async loadStably(){
        await import(/*webpackChunkName:"bs-static-loader" */ "./static-loader");
    }
}