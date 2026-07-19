import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcrDPsnEQMRwPMxk5FLFfB6EfW3I6kJbA",
  authDomain: "clone-2026-35117.firebaseapp.com",
  projectId: "clone-2026-35117",
  storageBucket: "clone-2026-35117.firebasestorage.app",
  messagingSenderId: "691347283335",
  appId: "1:691347283335:web:a5e96800180e3bec6a4722",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
