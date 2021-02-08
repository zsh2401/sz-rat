// import "!!style-loader!css-loader?modules=false!bootstrap/dist/css/bootstrap.min.css"
// import "jquery"
// import "bootstrap"

import "./App.css"
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router'

export default function() {
    ReactDOM.render(React.createElement(Router)
        , document.querySelector("#app"));
}