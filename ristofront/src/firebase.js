import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD1KHECRJXQX4fDnYJ3qJ_0UK1Wi0uPFSY",
    authDomain: "ristorante-a7f2e.firebaseapp.com",
    projectId: "ristorante-a7f2e",
    storageBucket: "ristorante-a7f2e.appspot.com",
    messagingSenderId: "718266734349",
    appId: "1:718266734349:web:710091511f2e97b7c0c244",
    measurementId: "G-RJF043BX07"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const provider = new GoogleAuthProvider();
