import Swal from "sweetalert2";

import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { finishLoadingAction, startLoadingAction } from "./ui";
import { cleanNotesLogout } from "./notes";

export const startStandardLogin = (email, password) => {
    return (dispatch) => {
        dispatch(startLoadingAction());
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoadingAction());
            })
            .catch((err) => {
                dispatch(finishLoadingAction());
                Swal.fire("Error", "User or Password are wrong", "error");
            });
    };
};

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            });
    };
};

export const startStandardRegister = (email, password, name) => {
    return (dispatch) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name });
                dispatch(login(user.uid, user.displayName));
            })
            .catch((err) => {
                Swal.fire("Error", err.message, "error");
            });
    };
};

export const login = (uid, displayName) => ({
    type: types.login,
    payload: { uid, displayName },
});

export const logout = () => ({
    type: types.logout,
});

export const startLogout = () => (dispatch) => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            dispatch(logout());
            dispatch(cleanNotesLogout());
        });
};
