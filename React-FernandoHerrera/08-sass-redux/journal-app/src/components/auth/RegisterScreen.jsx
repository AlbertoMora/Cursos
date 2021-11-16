import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { startStandardRegister } from "../../actions/auth";
import { removeErrorAction, setErrorAction } from "../../actions/ui";

import { useForm } from "../../hooks/useForm";

const RegisterScreen = () => {
    const dispatch = useDispatch();
    const { loading, msgErr } = useSelector((state) => state.ui);
    const [formValues, handleInputChange] = useForm({
        name: "Alberto",
        email: "alberto.mora@gmail.com",
        password: "123456",
        password2: "123456",
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startStandardRegister(email, password, name));
        }
    };

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setErrorAction("Name should be at least 1 char"));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setErrorAction("Email isn't valid"));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setErrorAction("Password should be at least 5 chars"));
            return false;
        }

        dispatch(removeErrorAction());
        return true;
    };

    return (
        <>
            <h3 className="auth__title">Register </h3>
            <form className="animate__animated animate__fadeIn animate_faster" onSubmit={handleRegister}>
                {!!msgErr && <div className="auth__alert-error">{msgErr}</div>}
                <input
                    type="text"
                    placeholder="name"
                    onChange={handleInputChange}
                    value={name}
                    name="name"
                    autoComplete="off"
                    className="auth__input"
                />
                <input
                    type="text"
                    placeholder="email"
                    onChange={handleInputChange}
                    value={email}
                    name="email"
                    autoComplete="off"
                    className="auth__input"
                />
                <input
                    type="password"
                    placeholder="password"
                    onChange={handleInputChange}
                    value={password}
                    name="password"
                    className="auth__input"
                />
                <input
                    type="password"
                    placeholder="confirm"
                    onChange={handleInputChange}
                    value={password2}
                    name="confirm"
                    className="auth__input"
                />
                <button disabled={loading} className="btn btn-primary btn-block" type="submit">
                    Register
                </button>
                <hr />
                <Link className="link mt-1" to="/auth/login">
                    Already registered?
                </Link>
            </form>
        </>
    );
};

export default RegisterScreen;
