import React from 'react'
import ReactDOM from 'react-dom'
import historyProvider from '../common/history-manager';
import { Router, Route, Switch } from 'react-router';

import {IndexPage,NotFoundPage} from '../view/pages';
import { AsyncComponent } from '../view/components';


//App容器
const APP_CONTAIINER = document.querySelector("#app");

// 应用路由器
const AppRouter = ()=>(
<Router history={historyProvider()}>
    <Switch>
        <Route exact path="/" component={ IndexPage}></Route>
        <Route path="*" component={()=><AsyncComponent loader={()=>import("../view/pages/NotFoundPage")}/>}></Route>
    </Switch>
</Router>)

//此方法将渲染应用到DOM中
export default function(){
    ReactDOM.render(<AppRouter/>,APP_CONTAIINER)
}