import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from '../../types/types.js';

const LoginScreen = ({ history }) => {
    const {dispatch} = useContext(AuthContext);
   
    const handleLogin = () => {
        
        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({type: types.login, payload: {name: "Alberto"}});
        history.replace(lastPath);
    };

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr />
            <button className="btn btn-outline-primary" onClick={handleLogin}>
                Log In
            </button>
        </div>
    );
};

export default LoginScreen;
