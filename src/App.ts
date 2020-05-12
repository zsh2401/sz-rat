import "jquery"
import "bootstrap"
import "!!style-loader!css-loader?modules=false!bootstrap/dist/css/bootstrap.min.css"

import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router'
import "./App.css"
import OfflinePluginRuntime from 'offline-plugin/runtime'

function installSWIfNeed(){
    if(process.env.NODE_ENV === "production"){
        OfflinePluginRuntime.install();
    }
}
installSWIfNeed();
ReactDOM.render(React.createElement(Router)
    ,document.querySelector("#app"));