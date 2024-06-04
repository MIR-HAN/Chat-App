// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSXOXrwhBj5tiILQe17terLquRCXm0PE0",
  authDomain: "fir-chat-app-71c18.firebaseapp.com",
  projectId: "fir-chat-app-71c18",
  storageBucket: "fir-chat-app-71c18.appspot.com",
  messagingSenderId: "477802189692",
  appId: "1:477802189692:web:29f6e0b1d250bab25d8af9",
  measurementId: "G-M82F7MJ2NJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//get authentication founction from firebase
export const auth = getAuth(app);
// google provider
export const provider = new GoogleAuthProvider();
// fire store
export const db = getFirestore(app);
