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

export const createUserProfileDocument = async(userAuth, additioanlData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const { displayName,email} = userAuth;
        const createdAt = new Date();
        try{

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additioanlData
                
            })
        } catch(error){
            console.log("error occured",error.message);            
        }
        
    }
    return userRef;
}

export const addCollectionAndDocument = async (collectionKey,objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectToAdd.forEach(obj =>{
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef,obj);
    })

    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections =>{
    const transformcollection = collections.docs.map( doc => {
        const {title,items} = doc.data();

        return {
            routName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transformcollection.reduce((accumulator,collection)=>{
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    },{})
});

export const getCurrentUser = () =>{
    return new Promise((resolve,reject)=>{
        const unsubscribe = auth.onAuthStateChanged(userAuth =>{
            unsubscribe();
            resolve(userAuth);
        },reject)
    })
}


firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleprovider = new firebase.auth.GoogleAuthProvider();
googleprovider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleprovider);

export default firebase;