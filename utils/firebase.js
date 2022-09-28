import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBS19qXEcnU5Lke7POHzwZbGKF6dsod2go",
    authDomain: "marvel-universe-2b678.firebaseapp.com",
    projectId: "marvel-universe-2b678",
    storageBucket: "marvel-universe-2b678.appspot.com",
    messagingSenderId: "805231512819",
    appId: "1:805231512819:web:63cdb428e0633db2b27b86"
  };

const app = initializeApp(firebaseConfig);

export { app }