// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import{getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYOCw3xkPixFoxaJplmWJmxoPJTJ6lGJ0",
  authDomain: "library-aa40a.firebaseapp.com",
  projectId: "library-aa40a",
  storageBucket: "library-aa40a.appspot.com",
  messagingSenderId: "47014084257",
  appId: "1:47014084257:web:4259cb7304a42b24903ae0",
  measurementId: "G-2WH93NX0TE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export{
    db
};