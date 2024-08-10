// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCERw6emIv0bjtsKAVEmjuHDQBYQgFPfRg",
  authDomain: "inventory-management-4f84a.firebaseapp.com",
  projectId: "inventory-management-4f84a",
  storageBucket: "inventory-management-4f84a.appspot.com",
  messagingSenderId: "332754874133",
  appId: "1:332754874133:web:84043887726b8d9405c31c",
  measurementId: "G-G0K3LMN3Z5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };