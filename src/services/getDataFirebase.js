import { getDocs } from 'firebase/firestore'

// Conservamos este helper para una futura reconexion con Firestore. Nunca se
// invoca sin una consulta y siempre devuelve un array, incluso ante un error.
export const getDataFromFirebase = async (firebaseQuery, fallback = []) => {
  if (!firebaseQuery) return fallback

  try {
    const snapshot = await getDocs(firebaseQuery)
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.warn('No se pudo cargar Firestore; se usan datos locales.', error.message)
    return fallback
  }
}
