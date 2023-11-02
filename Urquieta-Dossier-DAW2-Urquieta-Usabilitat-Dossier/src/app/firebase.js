import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyBFLd6bOjOUiaoMIkYLC2xYl7o1pJT2TYo",
  authDomain: "urquietafirebaseauth.firebaseapp.com",
  projectId: "urquietafirebaseauth",
  storageBucket: "urquietafirebaseauth.appspot.com",
  messagingSenderId: "358706251333",
  appId: "1:358706251333:web:56983395e46666381c052c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)