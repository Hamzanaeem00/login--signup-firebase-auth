// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPKhFJE9qmQLMriPKLau7NXkV466EsXyY",
  authDomain: "fir-auth-662c3.firebaseapp.com",
  projectId: "fir-auth-662c3",
  storageBucket: "fir-auth-662c3.appspot.com",
  messagingSenderId: "162027185053",
  appId: "1:162027185053:web:758dbd71bc4757f9c20574",
  measurementId: "G-VE7680CQ3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()

export {app, auth}