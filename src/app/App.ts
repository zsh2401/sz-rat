/**引入第三方库 */
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery"
import "bootstrap"
/**引入第三方库 */

/**全局css */
import "./App.css"
/**全局css */

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
