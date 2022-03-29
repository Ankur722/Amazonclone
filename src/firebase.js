// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDwyF4UMa1E8xMUYtWOjj3EMSPRmWcuQTw",
  authDomain: "amzon-clone-1a970.firebaseapp.com",
  projectId: "amzon-clone-1a970",
  storageBucket: "amzon-clone-1a970.appspot.com",
  messagingSenderId: "924721265283",
  appId: "1:924721265283:web:76eba3b5d637270d5079b6",
  measurementId: "G-50NX90V2HS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };