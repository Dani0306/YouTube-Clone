import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "yout-a7cd7.firebaseapp.com",
  projectId: "yout-a7cd7",
  storageBucket: "yout-a7cd7.appspot.com",
  messagingSenderId: "1069147890146",
  appId: "1:1069147890146:web:28bd4cf0f91e92b4d359bb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)