import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyDuEdzlP7vekjTPARER-It7LRJIHd1wSms",
  authDomain: "fir-taboo.firebaseapp.com",
  databaseURL: "https://fir-taboo.firebaseio.com",
  projectId: "fir-taboo",
  storageBucket: "fir-taboo.appspot.com",
  messagingSenderId: "1026259726714"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export default firebase;
