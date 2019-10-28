import AppRender from './AppRender'

/**引入第三方库 */
import "bootstrap/dist/css/bootstrap.min.css"


import "jquery"
import "bootstrap"

import OfflinePluginRuntime from 'offline-plugin/runtime'
import debugMx from './common/debug-mx'


import "!!style-loader!css-loader!./App.css"

//如果不是开发环境,则安装PWA SW
if(!debugMx.IS_DEV){
    console.log("installing serviceworker.js")
    OfflinePluginRuntime.install();
    console.log("installed serviceworker.js")
}

AppRender();