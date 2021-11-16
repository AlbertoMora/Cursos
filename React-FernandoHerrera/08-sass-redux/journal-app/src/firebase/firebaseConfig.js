import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA0roXa2I9E8SEsnJAIO1cXcFdPe6K1-9U",
    authDomain: "journal-app-curso-d1933.firebaseapp.com",
    projectId: "journal-app-curso-d1933",
    storageBucket: "journal-app-curso-d1933.appspot.com",
    messagingSenderId: "128176030447",
    appId: "1:128176030447:web:a6a540e219bb8bfce2911a",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
