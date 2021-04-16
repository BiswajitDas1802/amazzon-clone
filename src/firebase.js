// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAHz9vUlKeBDcIk06OX9ytqywc4xZwy5O0",
    authDomain: "clone-88a30.firebaseapp.com",
    projectId: "clone-88a30",
    storageBucket: "clone-88a30.appspot.com",
    messagingSenderId: "539370940800",
    appId: "1:539370940800:web:e3a7dde2c027306ad1f965",
    measurementId: "G-Z69C6EKGWE"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth}