import "../styles/databaseComponent.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default function Database(){
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE_DtfeVlLLUi8nqvPDOCvTWWYi6Drk8w",
  authDomain: "flipkartgrid-1be73.firebaseapp.com",
  projectId: "flipkartgrid-1be73",
  storageBucket: "flipkartgrid-1be73.firebasestorage.app",
  messagingSenderId: "222192112274",
  appId: "1:222192112274:web:75e5fb0f7939f4b3a20c4b",
  measurementId: "G-WBT8SRXTVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
   return(
    <>
    <h1>piplooo</h1>
    </>
   ); 
}