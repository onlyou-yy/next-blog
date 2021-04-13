import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import AdminIndex from './adminIndex';
import Login from './login';

const Main = () => {
    return (
        <Router>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/adminIndex" exact component={AdminIndex}></Route>
        </Router>
    )
}

export default Main;