import React from "react";
import { useDispatch } from "react-redux";
import { startLoginAction, startRegisterAction } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import "./login.css";

const initialLoginForm = {
    lEmail: "alberto2@gmail.com",
    lPassword: "123456",
};

const initialRegisterForm = {
    rName: "Alonso",
    rEmail: "al.to.mo@gmail.com",
    rPassword1: "123456",
    rPassword2: "123456",
};

const LoginScreen = () => {
    const [formLoginValues, handleLoginInputChange] = useForm(initialLoginForm);
    const { lEmail, lPassword } = formLoginValues;

    const [formRegisterValues, handleRegisterInputChange] = useForm(initialRegisterForm);
    const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginAction(lEmail, lPassword));
    };

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(startRegisterAction(rEmail, rPassword1, rName));
    };

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                value={lEmail}
                                onChange={handleLoginInputChange}
                                name="lEmail"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                value={lPassword}
                                onChange={handleLoginInputChange}
                                name="lPassword"
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Login" />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                value={rName}
                                onChange={handleRegisterInputChange}
                                name="rName"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                value={rEmail}
                                onChange={handleRegisterInputChange}
                                name="rEmail"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                value={rPassword1}
                                onChange={handleRegisterInputChange}
                                name="rPassword1"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                value={rPassword2}
                                onChange={handleRegisterInputChange}
                                name="rPassword2"
                            />
                        </div>

                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
