import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; //Todo lo comentado aqui se cambia con las cosas que tienen enseguida para regresarlo a la version anterior
// import firebase from 'firebase/app';
// import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAO491O1_dd0rm51w0GhToluVMPMRNAZtg",
  authDomain: "moistened-afc68.firebaseapp.com",
  databaseURL: "https://moistened-afc68-default-rtdb.firebaseio.com/",
  projectId: "moistened-afc68",
  storageBucket: "moistened-afc68.appspot.com",
  messagingSenderId: "232121535577",
  appId: "1:232121535577:web:d9875bd2cb7f7387c33548"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}

// firebase.initializeApp(firebaseConfig);

// const database = firebase.database();

// export default database;