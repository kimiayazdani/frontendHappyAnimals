import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Posts from "./Pages/Posts";
import Forum from "./Pages/Forum";
import Logout from "./Pages/Logout";
import Overview from "./Pages/Overview";

// import history from './history';


class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/SignUp" component={SignUp} />
                    <Route path="/Posts" component={Overview} />
                    <Route path="/Forum" component={Forum} />
                    <Route path="/Logout" component={Logout} />
                    <Route path="/Post" render={(props) => <Posts {...props}/> }/>
                </Switch>
            </Router>


        )
    }
}

export default Routes;