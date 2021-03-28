import "!!style-loader!css-loader?modules=false!nprogress/nprogress.css"
import nProgress from "nprogress"


/**
 * entry point
 */
main();



async function main() {
    nProgress.start();
    await downloadAndRunApplication();
    nProgress.done();
    await registerServiceWorker();
}

async function registerServiceWorker() {
    try {
        console.log("Registering Service Worker.");
        const registration = await navigator.serviceWorker.register("./service-worker.js")
        console.log("Service Worker has been registered. " + registration);
    } catch (err) {
        console.log("Service Worker registration failed: ", err)
    }
}

async function downloadAndRunApplication() {
    const app = await import("./App");
    app.default();
}


