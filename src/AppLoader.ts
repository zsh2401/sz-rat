//Load dependencies in some way.
//Async or sync↓
import "!!style-loader!css-loader?modules=false!bootstrap/dist/css/bootstrap.min.css"
import OffliePluginRuntime from 'offline-plugin/runtime'
import DebugMx from './common/sz-support/debug-mx'

//Install service worker
const installSwIfNeed = () => {
    if (!DebugMx.IS_DEV) {
        OffliePluginRuntime.install();
    }
}
installSwIfNeed();
const loadApplicationDependencies = async () => {
    await import("jquery");
    await import("bootstrap");
}
const runApplication = (async () => {
    const app = await import("./App");
    app.default();
});

(async () => {
    await loadApplicationDependencies();
    installSwIfNeed();
    await runApplication();
})();

