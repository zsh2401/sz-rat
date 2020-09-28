import React from 'react';
import useHistory from './common/sz-support/hooks/useHistory';
import { Router, Route, Switch } from 'react-router';
import IndexPage from './view/pages/IndexPage';
import NotFoundPage from './view/pages/NotFoundPage';
import Layout from './view/components/Layout';

//Application's router
export default function AppRouter() {
    return <Layout>
        <Router history={useHistory()}>
            <Switch>
                <Route exact path="/" component={IndexPage}></Route>
                <Route path="*" component={NotFoundPage}></Route>
            </Switch>
        </Router>
    </Layout>
}