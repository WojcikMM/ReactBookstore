import Rebase from 're-base';
import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCA_Uw00Faz9nMt1SQgBK1w3AEtzowT_LY",
    authDomain: "clockwork-bookstore-22df8.firebaseapp.com",
    databaseURL: "https://clockwork-bookstore-22df8.firebaseio.com",
    projectId: "clockwork-bookstore-22df8",
    storageBucket: "clockwork-bookstore-22df8.appspot.com",
    messagingSenderId: "998884734700"
});
  
const fbase = Rebase.createClass(firebaseApp.database());

export { fbase, firebaseApp };


