// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a8fc8.firebaseapp.com",
  projectId: "mern-estate-a8fc8",
  storageBucket: "mern-estate-a8fc8.firebasestorage.app",
  messagingSenderId: "616273364535",
  appId: "1:616273364535:web:019a274b7486261517a1b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);