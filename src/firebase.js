// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCgCQvAgIG4megp2oCXz_Y2a-PvzbksvFg",
  authDomain: "webkelas2.firebaseapp.com",
  projectId: "webkelas2",
  storageBucket: "webkelas2.appspot.com",
  messagingSenderId: "263974606844",
  appId: "1:263974606844:web:3abc11ae54876dc3238479",
  measurementId: "G-CL6DHY4ED7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();