// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: "twitter-e8737.firebaseapp.com",
  projectId: "twitter-e8737",
  storageBucket: "twitter-e8737.appspot.com",
  messagingSenderId: "112050377082",
  appId: "1:112050377082:web:624abf90694037e4e6c6c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Kimlik doğrulama
export const auth = getAuth(app);

//Google provider kurulumu
export const provider = new GoogleAuthProvider();

// Veritabanının referansını alma
export const db = getFirestore(app);

// Storage'ın referansını alma
export const storage = getStorage(app);