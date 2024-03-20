import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDPKy1qTSbYcLJBP-SaQX9UQW1wWsaOP8c",
    authDomain: "music-9cddf.firebaseapp.com",
    projectId: "music-9cddf",
    storageBucket: "music-9cddf.appspot.com",
    appId: "1:172224226064:web:4dc0edb71c8fe801157b95"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const userCollection = db.collection('users')


export {
    auth,
    db,
    userCollection
}