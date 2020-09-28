//Load dependencies in some way.
//Async or sync↓
import "!!style-loader!css-loader?modules=false!bootstrap/dist/css/bootstrap.min.css"
import OffliePluginRuntime from 'offline-plugin/runtime'
import DebugMx from './common/sz-support/debug-mx'
import React from 'react'
import ReactDOM from 'react-dom'
import Splash from "./view/pages/Splash"
//Install service worker
const installSwIfNeed = async () => {
    if (!DebugMx.IS_DEV) {
        OffliePluginRuntime.install();
    }
}
const splash = async () => {
    const splash = await import("./view/pages/Splash");
    ReactDOM.render(React.createElement(Splash), document.querySelector("#app"));
}

const loadApplicationDependencies = async () => {
    await Promise.all([import("jquery"), import("bootstrap")]);
}
const runApplication = (async () => {
    await import("./view/pages/Splash")
    const app = await import("./App");
    app.default();
});


(async () => {
    await splash();
    await loadApplicationDependencies();
    await runApplication();
    await installSwIfNeed();
})();

