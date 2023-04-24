// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
//https://www.makeuseof.com/react-app-firebase-connect/
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxWZg6KRoMsXzl8mkKZxqiqvdfd0h9Gmc",
  authDomain: "finance-app-675b9.firebaseapp.com",
  projectId: "finance-app-675b9",
  storageBucket: "finance-app-675b9.appspot.com",
  messagingSenderId: "548581906498",
  appId: "1:548581906498:web:fcec93ed5c5b984a7b75db",
  measurementId: "G-HZCM1M2QY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);