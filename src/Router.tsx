import React from 'react';
import useHistory from './sz-support/common/hooks/useHistory';
import { Router, Route, Switch } from 'react-router';
import IndexPage from './view/pages/IndexPage';
import NotFoundPage from './view/pages/NotFoundPage';
import Layout from './view/components/Layout';
import { KeepAlive, Provider } from "react-keep-alive"
//Application's router
export default function AppRouter() {
    return <Layout>
        <Router history={useHistory()}>
            <Provider>


                <Switch>
                    <Route exact path="/" component={() =>
                        <KeepAlive name="key">
                            <IndexPage />
                        </KeepAlive>}>
                    </Route>
                    <Route path="*" component={NotFoundPage}></Route>
                </Switch>
            </Provider>
        </Router>
    </Layout>
}