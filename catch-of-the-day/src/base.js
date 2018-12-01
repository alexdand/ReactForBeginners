import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAuteLPQGMITywokF15zp-Bd3PKSVKSUGM",
  authDomain: "catch-of-the-day-by-alex-cb085.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-by-alex-cb085.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
