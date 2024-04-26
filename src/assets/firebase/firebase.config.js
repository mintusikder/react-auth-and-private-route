// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAastThuj8SscKszdv25SyDEI9kyuaLy3w",
  authDomain: "react-auth-and-private-r-d961b.firebaseapp.com",
  projectId: "react-auth-and-private-r-d961b",
  storageBucket: "react-auth-and-private-r-d961b.appspot.com",
  messagingSenderId: "623409454694",
  appId: "1:623409454694:web:161781a0a3107ec08cd7a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
 const auth = getAuth(app);
 export default auth