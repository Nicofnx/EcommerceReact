import { initializeApp } from "firebase/app";


const {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MASSAGING_SENDER_ID,
  REACT_APP_APP_ID
} = process.env



const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MASSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID


  
};

// El proyecto puede ejecutarse sin credenciales de Firebase. Esto permite que
// el catalogo local siga funcionando aunque el backend original ya no este
// disponible o sus reglas de seguridad hayan cambiado.
export const isFirebaseConfigured = Object.values(firebaseConfig).every(Boolean);

export const firebaseApp = isFirebaseConfigured
  ? initializeApp(firebaseConfig)
  : null;
