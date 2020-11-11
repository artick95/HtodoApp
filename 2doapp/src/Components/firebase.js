import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyB0c8YnuBi0d-3TpzaY-f0r_TSBOaK2Pls",
    authDomain: "todoapp-9cb51.firebaseapp.com",
    databaseURL: "https://todoapp-9cb51.firebaseio.com",
    projectId: "todoapp-9cb51",
    storageBucket: "todoapp-9cb51.appspot.com",
    messagingSenderId: "764872871235",
    appId: "1:764872871235:web:accfe9e3d36e896476b3f6",
    measurementId: "G-2ZJ4LESTDM"
};
firebase.initializeApp(config);

let db = firebase.firestore();

export default db