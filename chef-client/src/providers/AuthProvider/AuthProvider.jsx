/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext } from "react";
import firebaseApp from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(firebaseApp);
const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    createUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
