// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBN8ZZ4Sg5Z9Vxv2tsbkpoWAoTI2vX5Y1o",
    authDomain: "proplay-events.firebaseapp.com",
    projectId: "proplay-events",
    storageBucket: "proplay-events.appspot.com",
    messagingSenderId: "467041594589",
    appId: "1:467041594589:web:9ee93c1f36a8f9debb3f34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);