import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router'

import debugMx from '../common/debug-mx'
import "./App.css"



ReactDOM.render(React.createElement(Router)
    ,document.querySelector("#app"));
