import firebase from "firebase";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DB_URL",
  projectId: "YOUR_PROJECTID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGE_ID",
  appId: "APP_ID",
  measurementId: "MESUREMENT_ID",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const storage = firebase.storage();
