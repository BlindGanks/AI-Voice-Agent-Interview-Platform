// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmQ8_Q2Bdcj9VdUC221t0jpt6_cby1MVk",
    authDomain: "prepwise-3d3c8.firebaseapp.com",
    projectId: "prepwise-3d3c8",
    storageBucket: "prepwise-3d3c8.firebasestorage.app",
    messagingSenderId: "758127148139",
    appId: "1:758127148139:web:180c86a7f0b2d89e49852e",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
