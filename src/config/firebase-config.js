// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXiHKehzd9RdUudj5HEdUm7b-cXWVEV6c",
  authDomain: "expense-tracker-eec5b.firebaseapp.com",
  projectId: "expense-tracker-eec5b",
  storageBucket: "expense-tracker-eec5b.appspot.com",
  messagingSenderId: "947425785187",
  appId: "1:947425785187:web:61bda9da7edfab72ee8f56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db= getFirestore(app);

//firebase login
//firebase init
//firebase deploy