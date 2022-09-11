// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnbFV16V_SuzQIV2qs1grXJS9y9qj29Dc",
  authDomain: "react-ulises.firebaseapp.com",
  projectId: "react-ulises",
  storageBucket: "react-ulises.appspot.com",
  messagingSenderId: "574760447273",
  appId: "1:574760447273:web:5fb0143ece7a62462c9b38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db