// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnlZ20dyUlYvbuSAoRPUA7lJXDUZtM85A",
    authDomain: "email-password-24142.firebaseapp.com",
    projectId: "email-password-24142",
    storageBucket: "email-password-24142.appspot.com",
    messagingSenderId: "5880739592",
    appId: "1:5880739592:web:f1a8a85f102866362f9ebd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;