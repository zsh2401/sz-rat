import "./init"

import React from 'react'
import ReactDOM from 'react-dom'
import { NotFoundPage } from "../view/pages"
export default function(){
    ReactDOM.render(<NotFoundPage/>,document.querySelector('#app'));
}