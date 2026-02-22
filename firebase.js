// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9KTcTyfrXEb1OY1w_e2m8zwnyxNMcons",
  authDomain: "majaffi-venture2.firebaseapp.com",
  projectId: "majaffi-venture2",
  storageBucket: "majaffi-venture2.firebasestorage.app",
  messagingSenderId: "101326202999",
  appId: "1:101326202999:web:4825cd888f70549a223e72",
  measurementId: "G-FYXJ7THNTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
