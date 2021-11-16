import React, { useContext } from "react";
import UserContext from "./UserContext";

const LoginScreen = () => {
    const { setUser } = useContext(UserContext);

    const handleLogin = () => {
        setUser({
            id: 1234,
            name: "Alberto",
            email: "mail@alberto.com",
        });
    };

    return (
        <>
            <h1>Login Screen</h1>
            <hr />
            <button onClick={handleLogin} className="btn btn-outline-primary">
                Login
            </button>
        </>
    );
};

export default LoginScreen;
