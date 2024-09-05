// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase';
import { createUserWithEmailAndPassword } from "firebase/auth"




const firebaseConfig = {
  apiKey: "AIzaSyCPECY79Qg7fWDcoOdx42sBhCytLLsRbRA",
  authDomain: "sep-f862e.firebaseapp.com",
  projectId: "sep-f862e",
  storageBucket: "sep-f862e.appspot.com",
  messagingSenderId: "1096159015021",
  appId: "1:1096159015021:web:685db47c89b35f0ff48f64",
  measurementId: "G-VGKKJKB8W6"
};
// const firebaseApp =firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// export  {db,auth};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };



