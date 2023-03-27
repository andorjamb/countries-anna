import React from "react";
import { useContext, createContext, useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  getAuth
} from 'firebase/auth';

const auth = getAuth();
const AuthContext = createContext();
const provider = new GoogleAuthProvider();

export const AuthContextProvider = ({ children }) => {

  const user = useSelector((state)=>{state.user.user});
  console.log('user:', user)

  const googleSignIn = () => {
    signInWithRedirect(auth, provider)
  };

  const logOut = () => {
    signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

    });
    return () => {
      unsubscribe();
    };
  }, []);


   return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};