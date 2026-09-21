import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnRU7WQ9oCX73_cS_Z2wWqOBHPd7dK-FY",
  authDomain: "tuga-login-app-70d37.firebaseapp.com",
  projectId: "tuga-login-app-70d37",
  storageBucket: "tuga-login-app-70d37.firebasestorage.app",
  messagingSenderId: "795651898705",
  appId: "1:795651898705:web:313de7c83cf319dfd06770",
  measurementId: "G-MY0D5RQHN0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
