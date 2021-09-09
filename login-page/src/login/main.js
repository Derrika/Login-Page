import React from "react";
import {Switch, Route} from 'react-router-dom';

import Login from "./Login";
import Register from './register';

const Main = () => {

    return (
        
        <Switch>
            <Route exact path="/Login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
        </Switch>
    );
}

export default Main;

/** The Switch decides which component to show based on the current URL */