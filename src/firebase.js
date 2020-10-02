import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBkcP2pxn22FbwPM2ha1BzVFKIfPIntvXQ",
    authDomain: "facebook-319d2.firebaseapp.com",
    databaseURL: "https://facebook-319d2.firebaseio.com",
    projectId: "facebook-319d2",
    storageBucket: "facebook-319d2.appspot.com",
    messagingSenderId: "643917582656",
    appId: "1:643917582656:web:833df52653f4cba0516aa5"
  });



const auth = firebase.auth();
const db = firebaseConfig.firestore();
const storage = firebase.storage();

export default firebase;
export {auth, db, storage};