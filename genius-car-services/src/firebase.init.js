// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVhEV-bNCBm48WKCwY1zniJZu7P4tvNN8",
  authDomain: "genius-car-services-ec6f1.firebaseapp.com",
  projectId: "genius-car-services-ec6f1",
  storageBucket: "genius-car-services-ec6f1.appspot.com",
  messagingSenderId: "274263605414",
  appId: "1:274263605414:web:c356fd162cfdbb759b3467"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;