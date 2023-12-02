// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfDm51EmC4wn0P90NFjSLowu204dBB6Ps",
  authDomain: "brakesys-cae2e.firebaseapp.com",
  projectId: "brakesys-cae2e",
  storageBucket: "brakesys-cae2e.appspot.com",
  messagingSenderId: "93963909550",
  appId: "1:93963909550:web:42fab939ef57ffb18db03f",
  measurementId: "G-YWDCYLKWSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)