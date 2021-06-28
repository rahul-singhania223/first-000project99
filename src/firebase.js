// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDuoxlTy-QxaY4pUDgAYKG-yIFeQRndE2o",
    authDomain: "men-s-shop.firebaseapp.com",
    projectId: "men-s-shop",
    storageBucket: "men-s-shop.appspot.com",
    messagingSenderId: "503453839170",
    appId: "1:503453839170:web:5eb62b227338c34c7da2db",
    measurementId: "G-5EQMC1T5XN"
  };

  
const firebaseApp = Firebase.initializeApp(firebaseConfig);

const db = Firebase.firestore();

export { db };

