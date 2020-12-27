import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: 'AIzaSyAE7alGKZGSBWqp17RMvrjPs3tM0aFzqXE',
  authDomain: 'vue-app-f11da.firebaseapp.com',
  databaseURL: 'https://vue-app-f11da.firebaseio.com',
  projectId: 'vue-app-f11da',
  storageBucket: 'vue-app-f11da.appspot.com',
  messagingSenderId: '281971787215',
  appId: '1:281971787215:web:eaa32516c1d02f61adfeba',
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const suppliersCollection = db.collection('suppliers');
const productCollection = db.collection('product');
const commentsCollection = db.collection('comments');
const likesCollection = db.collection('likes');

// export utils/refs
export {
  db,
  auth,
  suppliersCollection,
  productCollection,
  commentsCollection,
  likesCollection,
};
