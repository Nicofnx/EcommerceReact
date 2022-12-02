import { initializeApp } from "firebase/app";


/* const {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MASSAGING_SENDER_ID,
  REACT_APP_APP_ID
} = process.env */



const firebaseConfig = {
  /* apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MASSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID */


  apiKey: "AIzaSyCiwNv2vbCsM1rmA9qPhAKvMR7rqIM5dHE",
  authDomain: "ecommerce-react-sport.firebaseapp.com",
  projectId: "ecommerce-react-sport",
  storageBucket: "ecommerce-react-sport.appspot.com",
  messagingSenderId: "197343704183",
  appId: "1:197343704183:web:c76b72f2a1aed70d9dc272"
};


const app = initializeApp(firebaseConfig);
