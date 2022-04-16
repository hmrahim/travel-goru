// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk7PPgHO6rALe1IKMBDCFl4_8JYHPFXes",
  authDomain: "trabel-goru.firebaseapp.com",
  projectId: "trabel-goru",
  storageBucket: "trabel-goru.appspot.com",
  messagingSenderId: "186016605466",
  appId: "1:186016605466:web:27ded15d8ca79bd46f38a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth

