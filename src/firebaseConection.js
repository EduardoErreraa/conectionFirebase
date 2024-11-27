import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBXS87_IXFDtMQV4SOV6WGPDDfdJP_Sn10",
    authDomain: "primeflix-893c2.firebaseapp.com",
    projectId: "primeflix-893c2",
    storageBucket: "primeflix-893c2.firebasestorage.app",
    messagingSenderId: "582233591156",
    appId: "1:582233591156:web:4f1dbc13a687944a69f021",
    measurementId: "G-5CQZ1Q4WMZ"
  };


  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export {db, auth};