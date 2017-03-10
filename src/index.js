import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';

import App from './components/app';
import Welcome from './components/welcome';

import Category1 from './components/category'
import Class1 from './components/class'
import Page1 from './components/page1'
import Page2 from './components/page2'
import Page3 from './components/page3'
import Login from './components/login'
import Menu1 from './components/menu1'

ReactDom.render(
    <Router history={hashHistory}>
        <Route path={"/"} components={App}>
            <IndexRedirect to="/menu1/page1" />

            {/*<Route path={"category1"} components={Category1}>*/}
            <Route path={"menu1"} components={Menu1}>
                <IndexRoute component={Page1}></IndexRoute>
                <Route path={"page1"} components={Page1} />
                <Route path={"page2"} components={Page2} />
                <Route path={"page3"} components={Page3} />
            </Route>
            {/*</Route>*/}
        </Route>
        <Route path={"login"} components={Login} />
        <Route path={"login/1"} components={Login} />
    </Router>
    , document.getElementById('root')
);