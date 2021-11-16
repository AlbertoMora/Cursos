import { firebase } from "../firebase/firebaseConfig";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import JournalScreen from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";
import { login } from "../actions/auth";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { startLoadingNotes } from "../actions/notes";

const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsAuth(true);
                dispatch(startLoadingNotes(user.uid));
            } else {
                setIsAuth(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking]);

    if (checking) {
        return <h1>Please, wait...</h1>;
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuth={isAuth} path="/auth" component={AuthRouter} />
                    <PrivateRoute isAuth={isAuth} path="/" exact component={JournalScreen} />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
