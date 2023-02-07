import { initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPuuiEMjx6eFqTVZ6BJIyguQIYNixhEuE",
  authDomain: "bigochat-45107.firebaseapp.com",
  projectId: "bigochat-45107",
  storageBucket: "bigochat-45107.appspot.com",
  messagingSenderId: "125873866702",
  appId: "1:125873866702:web:322be02e13beab6285cd9f"
};

// Initialize Firebase 
 const app = initializeApp(firebaseConfig) ;
 export const auth = getAuth(app)
