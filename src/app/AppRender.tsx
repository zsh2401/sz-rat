import React from 'react'
import ReactDOM from 'react-dom'
import historyProvider from '../common/history-provider';
import { Router, Route, Switch } from 'react-router';

import IndexPage from '../view/pages/IndexPage';
import NotFoundPage from '../view/pages/NotFoundPage';

//App容器
const APP_CONTAIINER = document.querySelector("#app");

// 应用路由器
const AppRouter = ()=>(
<Router history={historyProvider()}>
    <Switch>
        <Route exact path="/" component={IndexPage}></Route>
        <Route path="*" component={NotFoundPage}></Route>
    </Switch>
</Router>)

//此方法将渲染应用到DOM中
export default function(){
    ReactDOM.render(<AppRouter/>,APP_CONTAIINER)
}