// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2cR0RN4PdUWdRgEckMXfMHp_-3OkQH20",
  authDomain: "flipcart-3a183.firebaseapp.com",
  projectId: "flipcart-3a183",
  storageBucket: "flipcart-3a183.appspot.com",
  messagingSenderId: "202991218035",
  appId: "1:202991218035:web:991bef8dfd2dd4608a2906"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB =getFirestore(app);
const auth =getAuth(app);

export {fireDB,auth};
