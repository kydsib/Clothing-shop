import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAfr3odo1tIM-V7-o2wDSpCfLFRKU05Kf4",
  authDomain: "clothing-shop-clone-db.firebaseapp.com",
  databaseURL: "https://clothing-shop-clone-db.firebaseio.com",
  projectId: "clothing-shop-clone-db",
  storageBucket: "",
  messagingSenderId: "244996237288",
  appId: "1:244996237288:web:b464f03d9320806677265d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
