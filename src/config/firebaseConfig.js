import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB02wMysaXUd_Yx1249IIyH6xqso5YbTP8",
  authDomain: "info-6132-lab4.firebaseapp.com",
  projectId: "info-6132-lab4",
  storageBucket: "info-6132-lab4.appspot.com",
  messagingSenderId: "111116120694",
  appId: "1:111116120694:web:851aa2cf825f954bb56557",
};

const firebaseApp = () => initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp());

const TRANSACTION_COLLECTION_TITLE = "transactionData";

export { db, TRANSACTION_COLLECTION_TITLE, firebaseApp };
