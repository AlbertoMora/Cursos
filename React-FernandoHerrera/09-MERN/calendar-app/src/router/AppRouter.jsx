import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { startCheckingAction } from '../actions/auth';
import LoginScreen from '../componets/auth/LoginScreen';
import CalendarScreen from '../componets/calendar/CalendarScreen';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
    const dispatch = useDispatch();

    const { checking, user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(startCheckingAction());
    }, [dispatch]);

    return checking ? (
        <h1>Please Wait...</h1>
    ) : (
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuth={!!user?.uid} path="/login" exact component={LoginScreen} />
                    <PrivateRoute isAuth={!!user?.uid} path="/" exact component={CalendarScreen} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
