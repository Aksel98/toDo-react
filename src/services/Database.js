import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCB6TnLqMslMVZeCYGg6XALkUgBMIVV2q4",
    authDomain: "todo-70766.firebaseapp.com",
    databaseURL: "https://todo-70766.firebaseio.com",
    projectId: "todo-70766",
    storageBucket: "todo-70766.appspot.com",
    messagingSenderId: "513505366389",
    appId: "1:513505366389:web:2dc82f178a049da24e833c"
};

firebase.initializeApp(config)
const db = firebase.firestore();
const auth = firebase.auth();
export {db, auth}
