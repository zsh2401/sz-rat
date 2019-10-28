import React from 'react'
import {Router, Route} from 'react-router-dom'
import historyProvider from './common/history-provider'

/** 导入所有路由组件 */
import PIndex from './view/pages/IndexPage'

// 应用路由器
const AppRouter = ()=>(
<Router history={historyProvider()}>
    <Route exact path="/" component={PIndex}></Route>
</Router>)
export default AppRouter;