import React from 'react';
import historyManager from './common/history-manager';
import { Router, Route, Switch } from 'react-router';
import {IndexPage, NotFoundPage} from './components/pages';

// 应用路由器
export default ()=>(
<Router history={historyManager()}>
    <Switch>
        <Route exact path="/" component={IndexPage}></Route>
        <Route path="*" component={NotFoundPage}></Route>
    </Switch>
</Router>)