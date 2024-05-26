// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_FIREBASE_API_KEY)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9c1c9.firebaseapp.com",
  projectId: "mern-blog-9c1c9",
  storageBucket: "mern-blog-9c1c9.appspot.com",
  messagingSenderId: "991063360859",
  appId: "1:991063360859:web:9de483348f5688e908867e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

