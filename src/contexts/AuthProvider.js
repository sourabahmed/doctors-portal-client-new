import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //create user in firebase
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //sign in user in firebase
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Log out user
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //manage user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    createUser,
    signIn,
    logOut,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
