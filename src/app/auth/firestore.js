import {
    initializeAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    OAuthCredential, User,
    signOut, getAuth
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCPvP3zNUq2jNyQ_rkmDufXkLzs-Oac4Cc",
    authDomain: "countries-3efc0.firebaseapp.com",
    projectId: "countries-3efc0",
    storageBucket: "countries-3efc0.appspot.com",
    messagingSenderId: "641902641962",
    appId: "1:641902641962:web:0ffb360c9d293634071453",
    measurementId: "G-F60JM8KEN4"
};

export const app = initializeApp(firebaseConfig);
/* export const auth = initializeAuth(app); */
const auth = getAuth();

export {
    auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
}

