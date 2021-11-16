import React, { useContext } from "react";
import UserContext from "./UserContext";

const AboutScreen = () => {
    const { user, setUser } = useContext(UserContext);

    const handleLogout = () => {
        setUser({});
    };

    return (
        <>
            <h1>About Screen</h1>
            <hr />

            <pre>{JSON.stringify(user, null, 3)}</pre>

            <button onClick={handleLogout} className="btn btn-secondary">
                Logout
            </button>
        </>
    );
};

export default AboutScreen;
