// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBomtFxuDLheDw0hRNpI5f1hV_YQvt0XLE",
  authDomain: "fir-prac-eda19.firebaseapp.com",
  projectId: "fir-prac-eda19",
  storageBucket: "fir-prac-eda19.appspot.com",
  messagingSenderId: "220759895017",
  appId: "1:220759895017:web:1817429883580124067978"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(); 