import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './AppRouter'
//App容器
const APP_CONTAIINER = document.querySelector("#app");
//此方法将渲染应用到DOM中
export default function(){
    ReactDOM.render(<AppRouter/>,APP_CONTAIINER)
}