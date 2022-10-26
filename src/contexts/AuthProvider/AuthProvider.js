import React from "react";
import { createContext } from "react";
import app from "../../firebase/firebase.config";
import {
  getAuth,
  onAuthStateChanged,
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

  // google login
  const googleProvider = (provider) => {
    return signInWithPopup(auth, provider);
  };

  // logout
  const logOut = () => {
    return signOut(auth);
  };

  //  observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("hello", currentUser);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, googleProvider, logOut };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
