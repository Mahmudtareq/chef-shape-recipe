// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBDhIgqCJssk3C6ZBb8uBqRqhVI80vLCUQ",
  authDomain: "chef-shape.firebaseapp.com",
  projectId: "chef-shape",
  storageBucket: "chef-shape.appspot.com",
  messagingSenderId: "519502783356",
  appId: "1:519502783356:web:351c415d05de87eda0baf9",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
