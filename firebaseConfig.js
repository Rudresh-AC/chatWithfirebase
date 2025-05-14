// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmeKUUsnALOL-oFkI6GJqtq5c8YkN_Gsk",
  authDomain: "fir-chat-6978c.firebaseapp.com",
  projectId: "fir-chat-6978c",
  storageBucket: "fir-chat-6978c.firebasestorage.app",
  messagingSenderId: "330338002812",
  appId: "1:330338002812:web:6a59e1289ce3457b0ca6f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

export const userRef = collection(db, "users");
export const roomRef = collection(db, "rooms");
