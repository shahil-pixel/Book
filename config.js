import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCaEoxHJX1a-MLzkLO09SNrMFiSmzmGv9E",
  authDomain: "booksanta-ea1cb.firebaseapp.com",
  projectId: "booksanta-ea1cb",
  storageBucket: "booksanta-ea1cb.appspot.com",
  messagingSenderId: "138395986104",
  appId: "1:138395986104:web:be7efc92df67d17780ac4d"
};

firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
