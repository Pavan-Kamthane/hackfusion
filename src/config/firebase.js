import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// // const firebaseConfig = {
// //   apiKey: "AIzaSyCVJmJPalJUtBzjq6KLsUebNydMln9ZAq0",
// //   authDomain: "squad-1a0f3.firebaseapp.com",
// //   projectId: "squad-1a0f3",
// //   storageBucket: "squad-1a0f3.appspot.com",
// //   messagingSenderId: "159858065991",
// //   appId: "1:159858065991:web:76749bb973b928d7c96762",
// //   measurementId: "G-EWC99MBXBJ"
// // };

// // const firebaseConfig = {
// //   apiKey: "AIzaSyBR1f9atfM_XY9aDrCk_W34lJWlJ6-EoZE",
// //   authDomain: "squad-room-b7d62.firebaseapp.com",
// //   projectId: "squad-room-b7d62",
// //   storageBucket: "squad-room-b7d62.appspot.com",
// //   messagingSenderId: "912892546364",
// //   appId: "1:912892546364:web:0e6a954e3784ee23c12239",
// //   measurementId: "G-7D647JLFFZ"
// // };

const firebaseConfig = {
    apiKey: "AIzaSyBAJEuTqJ71AUqiluONKlKbJox6Qj3leEk",
    authDomain: "squad-room-5962c.firebaseapp.com",
    projectId: "squad-room-5962c",
    storageBucket: "squad-room-5962c.appspot.com",
    messagingSenderId: "739404992861",
    appId: "1:739404992861:web:0931cd84dc5cac066118b4",
    measurementId: "G-B2GXCT8NRS"
  };

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);