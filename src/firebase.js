import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2d3-5Jte4D1Q0GlKU4wXLrNiY6ddbGzs",
  authDomain: "razz-portfolio.firebaseapp.com",
  projectId: "razz-portfolio",
  storageBucket: "razz-portfolio.appspot.com",
  messagingSenderId: "813856439769",
  appId: "1:813856439769:web:b44563b25cfda5fbd0edc8",
  measurementId: "G-BNKQXKBHXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
