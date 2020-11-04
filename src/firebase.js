import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhhgwXaHlV-ru9TDw6XMbA4akXoexrm_s",
  authDomain: "authentication-cripto-viewer.firebaseapp.com",
  databaseURL: "https://authentication-cripto-viewer.firebaseio.com",
  projectId: "authentication-cripto-viewer",
  storageBucket: "authentication-cripto-viewer.appspot.com",
  messagingSenderId: "702446258062",
  appId: "1:702446258062:web:39d6441d6745f5eff586df",
};

const firebaseAuth = firebase.initializeApp(firebaseConfig);
const authDb = firebaseAuth.auth();
export default authDb;
