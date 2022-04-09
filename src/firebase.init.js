import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDXHrYulh98NJdSK6bXWSDgc86pQrbEK1c",
  authDomain: "router-firebase-integrat-6bf44.firebaseapp.com",
  projectId: "router-firebase-integrat-6bf44",
  storageBucket: "router-firebase-integrat-6bf44.appspot.com",
  messagingSenderId: "994043399641",
  appId: "1:994043399641:web:c7e0237b36f20053f4ddc8",
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export default app