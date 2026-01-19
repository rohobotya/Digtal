// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlZ5d5Z5oNzPvJlRNaC7Y8LhOsEMgJMhY",
  authDomain: "zoer-4ed04.firebaseapp.com",
  projectId: "zoer-4ed04",
  storageBucket: "zoer-4ed04.firebasestorage.app",
  messagingSenderId: "887229935008",
  appId: "1:887229935008:web:ae95be82b7a94aab5448c5",
  measurementId: "G-PKY5Z7DT5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
