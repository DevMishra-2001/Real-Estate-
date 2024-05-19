// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-a5f0b.firebaseapp.com",
  projectId: "real-estate-a5f0b",
  storageBucket: "real-estate-a5f0b.appspot.com",
  messagingSenderId: "1005298518354",
  appId: "1:1005298518354:web:2f4714f4d0c13780a2d28b",
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
