import React from "react";
import { createContext } from "react";
import app from "../../firebase/firebase.config";
import { getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";

// context create
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  // google login
  const googleProvider = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = { user, googleProvider };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
