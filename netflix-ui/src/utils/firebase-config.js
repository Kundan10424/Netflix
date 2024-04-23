import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyC3vG6DNXwvfJldUfRK3AhTAJX2sR4IDjY",
  authDomain: "react-netflix-clone-c7f29.firebaseapp.com",
  projectId: "react-netflix-clone-c7f29",
  storageBucket: "react-netflix-clone-c7f29.appspot.com",
  messagingSenderId: "68157857454",
  appId: "1:68157857454:web:12c822bf4e7851fc9ad73f",
  measurementId: "G-F3F2RRWKJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app)