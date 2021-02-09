//Load dependencies in some way.
//Async or sync↓
import "!!style-loader!css-loader?modules=false!nprogress/nprogress.css"
import OffliePluginRuntime from 'offline-plugin/runtime'
import DebugMx from './sz-support/common/debug-mx'
import nProgress from "nprogress"
import { sleep } from "./sz-support/common"


//Install service worker
const installSwIfNeed = async () => {
    if (!DebugMx.IS_DEV) {
        OffliePluginRuntime.install();
    }
}
const runApplication = (async () => {
    const app = await import("./App");
    app.default();
});

(async () => {
    nProgress.start();
    await sleep(100);
    await runApplication();
    nProgress.done();
    await installSwIfNeed();
})();

