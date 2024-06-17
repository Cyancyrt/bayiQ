// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSANGING_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};
console.log(firebaseConfig);
// Initialize Firebase
const appFirebase = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

export function getFirebaseErrorMessage(error) {
  switch (error.code) {
    case "auth/email-already-in-use":
      return "Alamat email ini sudah digunakan. Silakan gunakan alamat email lain.";
    case "auth/invalid-email":
      return "Alamat email tidak valid. Silakan periksa dan coba lagi.";
    case "auth/operation-not-allowed":
      return "Operasi ini tidak diperbolehkan. Silakan hubungi dukungan.";
    case "auth/weak-password":
      return "Kata sandi terlalu lemah. Silakan gunakan kata sandi yang lebih kuat.";
    case "auth/user-not-found":
      return "Pengguna tidak ditemukan. Silakan periksa alamat email Anda atau daftar akun baru.";
    case "auth/wrong-password":
      return "Kata sandi salah. Silakan coba lagi.";
    default:
      return "Terjadi kesalahan. Silakan coba lagi.";
  }
}

export default firebase;
export const appAuth = getAuth();
