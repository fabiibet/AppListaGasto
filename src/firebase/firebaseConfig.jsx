import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1LZub7njKK5oJoe87L4aHT-PTT2vURfg",
  authDomain: "app-lista-gastos-c3ebb.firebaseapp.com",
  projectId: "app-lista-gastos-c3ebb",
  storageBucket: "app-lista-gastos-c3ebb.appspot.com",
  messagingSenderId: "704911211582",
  appId: "1:704911211582:web:9b9188f4f6215b9bfde56f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {db, auth};