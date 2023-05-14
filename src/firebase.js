import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNbtbJZAEwApKhThD0R8bJMzna0PGV6-s",
  authDomain: "blogproject-45242.firebaseapp.com",
  projectId: "blogproject-45242",
  storageBucket: "blogproject-45242.appspot.com",
  messagingSenderId: "879409178759",
  appId: "1:879409178759:web:78f390eec7889ed4a0b022"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();