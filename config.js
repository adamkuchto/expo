// Import the functions you need from the SDKs you ne
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0_fS0LAbM4ns_CyE0KlitAEZebzD0uO8",
  authDomain: "zajecia3-zaliczenie.firebaseapp.com",
  projectId: "zajecia3-zaliczenie",
  storageBucket: "zajecia3-zaliczenie.firebasestorage.app",
  messagingSenderId: "31919654770",
  appId: "1:31919654770:web:d9c30fed33b12106d33feb",
  measurementId: "G-JMJ0T2VB4R"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db }