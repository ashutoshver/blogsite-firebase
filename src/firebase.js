import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzWL1bxlP4B2RcflG_A7DH_pifj5IecJc",
  authDomain: "blogproject-72efa.firebaseapp.com",
  projectId: "blogproject-72efa",
  storageBucket: "blogproject-72efa.appspot.com",
  messagingSenderId: "16225021878",
  appId: "1:16225021878:web:bb0ef85a95d962a6821b17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();