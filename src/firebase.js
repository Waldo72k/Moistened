import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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
export const db = getDatabase(app);