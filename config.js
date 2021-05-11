import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAXLHpNpGy_RZ4kn5-g18oNw_V9lpSCBxs",
  authDomain: "storyhub-5ba79.firebaseapp.com",
  projectId: "storyhub-5ba79",
  storageBucket: "storyhub-5ba79.appspot.com",
  messagingSenderId: "897683979231",
  appId: "1:897683979231:web:b1df492d7a5c13f038e26a"
};

firebase.initializeApp(firebaseConfig)
export default firebase.firestore()