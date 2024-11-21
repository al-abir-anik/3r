import { createContext, useEffect, useState } from "react";
import { auth } from "./../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const [user, setUser] = useState(null);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const updateUserProfile = async (updateData) => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, updateData);
      setUser({ ...auth.currentUser });
    } finally {
      setLoading(false);
    }
  };

  const AuthData = {
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
    updateUserProfile,
    user,
    setUser,
    loading,
  };
  return (
    <div>
      <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
