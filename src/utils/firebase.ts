import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "apikey",
  authDomain: "authDomain",
  projectId: "project id",
  storageBucket: "storage bucket",
  messagingSenderId: "messaging sender id",
  appId: "appId",
  measurementId: "measurement id"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
