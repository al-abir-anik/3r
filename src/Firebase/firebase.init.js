// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB83mVFU3VFIOZt1B3qtHQgzVecFcBrtUM",
  authDomain: "ecotourism-adventure.firebaseapp.com",
  projectId: "ecotourism-adventure",
  storageBucket: "ecotourism-adventure.firebasestorage.app",
  messagingSenderId: "854109308007",
  appId: "1:854109308007:web:797c0a409da224681640c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);