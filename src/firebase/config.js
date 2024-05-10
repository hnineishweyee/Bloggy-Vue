import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDelhwiU9bFaN6gOA2kB2okVv3X5ugwXe8",
    authDomain: "vue-blog-system-2a0d7.firebaseapp.com",
    projectId: "vue-blog-system-2a0d7",
    storageBucket: "vue-blog-system-2a0d7.appspot.com",
    messagingSenderId: "426356521494",
    appId: "1:426356521494:web:e05b068f34764fda51d337"
  };

  // init FIREBASE
  firebase.initializeApp(firebaseConfig);

  // DATABASE SETUP
  let db = firebase.firestore()
  let timestamp = firebase.firestore.FieldValue.serverTimestamp
  export {db, timestamp}