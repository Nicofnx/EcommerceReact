import DataContext from '../context/DataContext';
import '../firebase'
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore'
import { useEffect, useState, useContext } from 'react'




export const getDataFromFirebase = async (dataFirabase) => {
  const controller = new AbortController()
  const { signal } = controller
  try{
    const resp = await getDocs(dataFirabase,{signal})
    const data = await resp.docs.map((doc)=>({id: doc.id, ...doc.data()}))
    return data
    

  }
  catch(err) {
    if (err.name !== 'AbortError') {
    console.error(err.message)
    }
  }
  return () => controller.abort()
}

getDataFromFirebase()


export const getCategoryFilters = async (categorygender='Hombre')=>{
  const db = getFirestore();
  const q =  query(
    collection(db, 'productos'),
    where('gender', '==', categorygender)
  );
  return getDocs(q)
  
  
}
