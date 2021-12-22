import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from "@emotion/styled";

import HomePage from "./page/home";
import ProjectPage from "./page/project";
import logo from '../public/assets/logo.png';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/project" component={ProjectPage} />
            </Switch>
        </Router>
    );
};

export default App;
