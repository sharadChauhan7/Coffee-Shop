import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDppLBaauZWmQ_qOuxUHcISD30Z_3qogM0",
  authDomain: "coffee-shop-7f3ca.firebaseapp.com",
  projectId: "coffee-shop-7f3ca",
  storageBucket: "coffee-shop-7f3ca.appspot.com",
  messagingSenderId: "183360985638",
  appId: "1:183360985638:web:35e96442332d50db5864e7",
  measurementId: "G-L7J7BSMFGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);

export default app;