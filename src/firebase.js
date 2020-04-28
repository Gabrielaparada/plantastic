import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyApwrElXELr7FjhASUXLwmViqWHSYCujPQ",
  authDomain: "plant-guide-71002.firebaseapp.com",
  databaseURL: "https://plant-guide-71002.firebaseio.com",
  projectId: "plant-guide-71002",
  storageBucket: "plant-guide-71002.appspot.com",
  messagingSenderId: "87265471429",
  appId: "1:87265471429:web:31f6ccc7bd9e0cc14739ac",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;