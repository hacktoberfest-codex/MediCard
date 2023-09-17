// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRtpkg79hhtk7W_fK8Zj5Tqe3AIXqyYw4",
  authDomain: "medicard-iter.firebaseapp.com",
  databaseURL: "https://medicard-iter-default-rtdb.firebaseio.com",
  projectId: "medicard-iter",
  storageBucket: "medicard-iter.appspot.com",
  messagingSenderId: "597636170176",
  appId: "1:597636170176:web:84e8d11f016ee17e1a8825",
  measurementId: "G-9H61JB43TQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);