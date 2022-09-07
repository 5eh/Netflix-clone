// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj5hDpwu2mVyRcQZLUliYx_SkHwdJ18o4",
  authDomain: "netflix-clone-73be8.firebaseapp.com",
  projectId: "netflix-clone-73be8",
  storageBucket: "netflix-clone-73be8.appspot.com",
  messagingSenderId: "887387491511",
  appId: "1:887387491511:web:80f105d9961ba0436f9132",
  measurementId: "G-B5TE84VYXZ",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
