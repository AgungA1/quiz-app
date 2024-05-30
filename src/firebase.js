import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDVw4Z-YEUK5aR3aTbeWENcs-9HWAwtjvY",
    authDomain: "quiz-app-reactjs-6cb89.firebaseapp.com",
    projectId: "quiz-app-reactjs-6cb89",
    storageBucket: "quiz-app-reactjs-6cb89.appspot.com",
    messagingSenderId: "519910706933",
    appId: "1:519910706933:web:49842d03601f0fb633ffbc",
    measurementId: "G-5Y4YYY6G3Q"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };