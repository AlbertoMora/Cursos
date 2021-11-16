import Swal from 'sweetalert2';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import { calendarLogoutAction } from './calendar';

export const startLoginAction = (email, password) => {
    return async (dispatch) => {
        const res = await fetchWithoutToken('auth', { email, password }, 'POST');
        const { ok, token, user, msg } = await res.json();

        if (ok) {
            localStorage.setItem('token', token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(loginAction(user));
        } else {
            Swal.fire('Error', msg, 'error');
        }
    };
};

export const loginAction = (user) => ({
    type: types.authLogin,
    payload: user,
});

export const startRegisterAction = (email, password, name) => {
    return async (dispatch) => {
        const res = await fetchWithoutToken('auth/new', { email, password, name }, 'POST');
        const { ok, token, user, msg } = await res.json();

        if (ok) {
            localStorage.setItem('token', token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(loginAction(user));
        } else {
            Swal.fire('Error', msg, 'error');
        }
    };
};

export const startCheckingAction = () => {
    return async (dispatch) => {
        const res = await fetchWithToken('auth/renew-token');
        const { ok, token, user } = await res.json();

        if (ok) {
            localStorage.setItem('token', token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(loginAction(user));
        } else {
            dispatch(checkingFinish());
        }
    };
};

const checkingFinish = () => ({
    type: types.authCheckingFinish,
});

export const startLogoutAction = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logoutAction());
        dispatch(calendarLogoutAction());
    };
};

export const logoutAction = () => ({ type: types.authLogout });
