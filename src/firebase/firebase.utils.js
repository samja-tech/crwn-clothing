import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAnZon9zVbdrx9ApMRO_RYqpn_8t0XZLKI",
    authDomain: "crwn-db-3bfe7.firebaseapp.com",
    databaseURL: "https://crwn-db-3bfe7.firebaseio.com",
    projectId: "crwn-db-3bfe7",
    storageBucket: "crwn-db-3bfe7.appspot.com",
    messagingSenderId: "220527607105",
    appId: "1:220527607105:web:04f9627f538590baa335c0",
    measurementId: "G-KBT4CEVWL8"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;