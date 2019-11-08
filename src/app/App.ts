import "./GlobalLibraryImporter"

/**安装Service Worker */
import OfflinePluginRuntime from 'offline-plugin/runtime'
import debugMx from '../common/debug-mx'
if(!debugMx.IS_DEV){
    console.log("Installing sw.js")
    OfflinePluginRuntime.install();
    console.log("Installed sw.js")
}
/**安装Service Worker */

import AppRender from './AppRender'
AppRender();
