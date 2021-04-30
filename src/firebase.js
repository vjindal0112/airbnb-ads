import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/analytics';

var firebaseConfig = {
  apiKey: "AIzaSyCaKHd4AkhOu0kZoUtGoZo_AOYytzH2gco",
  authDomain: "airbnb-ads.firebaseapp.com",
  projectId: "airbnb-ads",
  storageBucket: "airbnb-ads.appspot.com",
  messagingSenderId: "1013780448142",
  appId: "1:1013780448142:web:be8f13146a645de29f5adf",
  measurementId: "G-P2W05876NB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.database();

export default db;
