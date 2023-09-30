// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_CHEF_apiKey,
  authDomain: import.meta.env.VITE_CHEF_authDomain,
  projectId: import.meta.env.VITE_CHEF_projectId,
  storageBucket: import.meta.env.VITE_CHEF_storageBucket,
  messagingSenderId: import.meta.env.VITE_CHEF_messagingSenderId,
  appId: import.meta.env.VITE_CHEF_appId,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
