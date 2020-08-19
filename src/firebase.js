import firebase from "firebase";

// firebase config file
const firebaseConfig = {
  apiKey: "AIzaSyABtTsOABYdb3tZ0YzNbA143pPF5Mf90EM",
  authDomain: "twitter-clone-41cce.firebaseapp.com",
  databaseURL: "https://twitter-clone-41cce.firebaseio.com",
  projectId: "twitter-clone-41cce",
  storageBucket: "twitter-clone-41cce.appspot.com",
  messagingSenderId: "759959533648",
  appId: "1:759959533648:web:4b07b59cab25cdf74f7955",
  measurementId: "G-WJ32RDFXYP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const storage = firebase.storage();
