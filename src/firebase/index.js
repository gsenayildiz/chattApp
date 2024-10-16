// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZCYjHZOy5GcJ8q6bp0LXYbWJabuVhOBY",
  authDomain: "chat-app-9e180.firebaseapp.com",
  projectId: "chat-app-9e180",
  storageBucket: "chat-app-9e180.appspot.com",
  messagingSenderId: "890473079342",
  appId: "1:890473079342:web:83b888e53db104d1ab35bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firebase auth referensını al
export const auth = getAuth(app);

// google sağlayıcısını kur
export const provider = new GoogleAuthProvider();

//firestore veritabanının referansını al
export const db  = getFirestore(app);
