import "jquery"
import "bootstrap"
import "!!style-loader!css-loader?modules=false!bootstrap/dist/css/bootstrap.min.css"

import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router'
import "./App.css"
import OffliePluginRuntime from 'offline-plugin/runtime'
import DebugMx from './common/sz-support/debug-mx'

const installSwIfNeed = () => {
    if (!DebugMx.IS_DEV) {
        OffliePluginRuntime.install();
    }
}
installSwIfNeed();
(async () => {
    ReactDOM.render(React.createElement(Router)
        , document.querySelector("#app"));
})();
