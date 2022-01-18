import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDoG-5I6so2_gsJRWpMO6FVO1y2sUTztEw",
    authDomain: "fav-cars-and-bikes---react.firebaseapp.com",
    projectId: "fav-cars-and-bikes---react",
    storageBucket: "fav-cars-and-bikes---react.appspot.com",
    messagingSenderId: "453305460672",
    appId: "1:453305460672:web:7d75b9fa7f98ff15508a25"
  };

  export default firebase.initializeApp(firebaseConfig);