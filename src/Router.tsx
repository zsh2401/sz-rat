import React, { useContext, useState } from 'react';
import { Router, Route, Switch } from 'react-router';
import IndexPage from './view/pages/IndexPage';
import NotFoundPage from './view/pages/NotFoundPage';
import Layout from './view/components/Layout';
import AppContext from "./AppContext"
import { createHashHistory } from "history"
export default function AppRouter() {
    const [history] = useState(() => createHashHistory());
    return <AppContext.Provider value={{
        history
    }}>
        <Layout>
            <Router history={useContext(AppContext).history}>
                <Switch>
                    <Route exact path="/" component={IndexPage}></Route>
                    <Route path="*" component={NotFoundPage}></Route>
                </Switch>
            </Router>
        </Layout>
    </AppContext.Provider>
}