import React from "react";
import { createContext } from "react";
import app from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

// context create
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  // google login
  const googleProvider = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // gitHub login
  const gitProvider = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // sing up email and pass
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with email pass
  const signIn = (email, password) => {
    setLoading(setLoading);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //  observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("hello", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    googleProvider,
    logOut,
    createUser,
    signIn,
    gitProvider,
    loading,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
