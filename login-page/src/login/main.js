import React from "react";
import {Switch, Route} from 'react-router-dom';

import Login from "./Login";
import Register from './register';
import Homepage from '../Homepage/homepage';
import Blog from "../Homepage/Blog";

const Main = () => {

    return (
        
        <Switch>
            <Route exact path="/" component={Homepage}></Route>
            <Route exact path="/Login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="../Homepage/Blog" component={Blog}></Route>
        </Switch>
    );
}

export default Main;

/** The Switch decides which component to show based on the current URL */