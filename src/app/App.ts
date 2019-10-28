

/**引入第三方库 */
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery"
import "bootstrap"
/**引入第三方库 */

import "./App.css"

//如果不是开发环境,则安装PWA SW
import OfflinePluginRuntime from 'offline-plugin/runtime'
import debugMx from '../common/debug-mx'
if(!debugMx.IS_DEV){
    console.log("installing serviceworker.js")
    OfflinePluginRuntime.install();
    console.log("installed serviceworker.js")
}

import AppRender from './AppRender'
setTimeout(AppRender,5000);
