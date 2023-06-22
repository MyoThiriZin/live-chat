// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBBIirEtOvHVKpHOLLhw2FQhSXIdtA2beE",
    authDomain: "vue-blog-system-6b3f4.firebaseapp.com",
    projectId: "vue-blog-system-6b3f4",
    storageBucket: "vue-blog-system-6b3f4.appspot.com",
    messagingSenderId: "706603042305",
    appId: "1:706603042305:web:0c4281d18f64bb18e4e200",
    measurementId: "G-HZ7LYBS8ZM"
  };
  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;
  let auth=firebase.auth();

  export {db,timestamp,auth}