import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startGoogleLogin, startStandardLogin } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

const LoginScreen = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.ui);
    const [formValues, handleInputChange] = useForm({
        email: "alberto.mora@gmail.com",
        password: "123456",
    });

    const { email, password } = formValues;

    const handlelogin = (e) => {
        e.preventDefault();
        dispatch(startStandardLogin(email, password));
    };

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    };

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form className="animate__animated animate__fadeIn" onSubmit={handlelogin}>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={handleInputChange}
                    name="email"
                    autoComplete="off"
                    className="auth__input"
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={handleInputChange}
                    name="password"
                    className="auth__input"
                />
                <button disabled={loading} className="btn btn-primary btn-block" type="submit">
                    {" "}
                    Login{" "}
                </button>
                <hr />
                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                </div>

                <div onClick={handleGoogleLogin} className="google-btn">
                    <div className="google-icon-wrapper">
                        <img
                            className="google-icon"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="google button"
                        />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>
                <Link className="link" to="/auth/register">
                    Create new Account
                </Link>
            </form>
        </>
    );
};

export default LoginScreen;
