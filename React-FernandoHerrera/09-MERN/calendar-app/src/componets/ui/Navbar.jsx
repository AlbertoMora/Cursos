import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogoutAction } from '../../actions/auth';

const Navbar = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogoutAction());
    };

    const signedInData = (
        <>
            <span className="navbar-brand">{user?.name}</span>
            <button onClick={handleLogout} type="button" className="btn btn-outline-danger">
                <i className="fas fa-sign-out-alt"></i>
            </button>
        </>
    );

    return <nav className="navbar navbar-dark bg-dark mb-4">{!!user?.uid && signedInData}</nav>;
};

export default Navbar;
