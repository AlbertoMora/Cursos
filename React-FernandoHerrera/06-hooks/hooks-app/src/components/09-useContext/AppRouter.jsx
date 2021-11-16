import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import NavBar from "./NavBar";

const AppRouter = () => {
    return (
        <Router>
            <>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={HomeScreen} />
                    <Route path="/about" component={AboutScreen} />
                    <Route path="/login" component={LoginScreen} />
                    <Route component={HomeScreen} />
                </Switch>
            </>
        </Router>
    );
};

export default AppRouter;
