import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7gqIKoSVLrMlaIDuXTh1DB_yft2XZ3s8",
  authDomain: "food-order-7e13f.firebaseapp.com",
  projectId: "food-order-7e13f",
  storageBucket: "food-order-7e13f.appspot.com",
  messagingSenderId: "136162378690",
  appId: "1:136162378690:web:239ad3cb62147ad2e24c5b",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
