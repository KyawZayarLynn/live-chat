import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2ZFQLF_ZCSXUF5jAryhsVLCgLC8ugUOU",
  authDomain: "vue-blog-system-8aa7a.firebaseapp.com",
  projectId: "vue-blog-system-8aa7a",
  storageBucket: "vue-blog-system-8aa7a.appspot.com",
  messagingSenderId: "149863406280",
  appId: "1:149863406280:web:364fdd1bf41b04fc78a3fd"
};

const app = initializeApp(firebaseConfig);
let db = getFirestore(app);
let timestamp = Timestamp;
let auth = getAuth(app);

export { db, timestamp,auth };