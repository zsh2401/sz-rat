// console.log("wtf");
import OfflinePluginRuntime from 'offline-plugin/runtime'
import * as topPace from '../../common/view-helper/top-pace'
import contentLoader from './content-loader';
class AppLoader {
    public async run() {
        await topPace.initGlobalPace();
        await this.installSWIfNeed();
        await this.loadLib();
        if(thereIsHomePage()){
            await wait(1937);
        }
        await this.loadApp();
    }
    @percentSpan(5, 10)
    private async installSWIfNeed() {
        if (process.env.NODE_ENV === "production") {
            OfflinePluginRuntime.install();
        }
    }
    @percentSpan(20, 80)
    private async loadLib() {
        //@ts-ignore
        const contents: string[] = ___CONTENT_URLS;
        const percentSpan = [20, 80];
        const everyStepPercent = parseInt(((percentSpan[1] - percentSpan[0]) * 1.0 * (1.0 / contents.length)).toFixed(0));
        for (let i = 0; i < contents.length; i++) {
            let crt = contents[i];
            await contentLoader(crt);
            topPace.updateProgress(topPace.getPercent() + everyStepPercent);
        }
    }
    @percentSpan(null, 100)
    private async loadApp() {
        await import(/*webpackChunkName:"app"*/"../App")
    }
    private get percent() {
        return topPace.getPercent();
    }
    private set percent(value: number) {
        topPace.updateProgress(value);
    }
}
new AppLoader().run();

function percentSpan(startPercent: number | null, finishedPercent: number) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const raw = descriptor.value;
        descriptor.value = async (...args: any[]) => {
            if (startPercent) {
                target.percent = startPercent;
            }
            let ret = await raw.apply(target, args);
            target.percent = finishedPercent;
            return ret;
        }
    }
}

function thereIsHomePage(): boolean {
    return /#[\/]?$/.test(window.location.hash);
}
async function wait(ms: number = 1500) {
    await new Promise(resolve => setTimeout(resolve, ms));
}
