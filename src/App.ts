import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router'
import "./App.css"

export default function() {
    ReactDOM.render(React.createElement(Router)
        , document.querySelector("#app"));
}