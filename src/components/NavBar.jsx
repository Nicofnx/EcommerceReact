import styles from "./NavBar.module.css"
import { useState, useContext } from "react"
import DataContext from '../context/DataContext'
import { getFirestore, collection, getDocs, where, query} from 'firebase/firestore'

const NavBar = () => {
  
  const { products, setFilterProducts,allCategories } = useContext(DataContext)
  const [isSelected, setIsSelected] = useState(1)
  

 
  
  const onFilter = (e, categorygender) => {
    
    setIsSelected(e.target.id)
    const db = getFirestore();
    const q =  query(
      collection(db, 'productos'),
      where('gender', '==', categorygender)
    );
    
    getDocs(q)
      .then((snapshot) => {
        if(snapshot.size === 0) {
          setFilterProducts([]);
          ;
        }
        const productsFilter = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
        categorygender === 'Todo'
        ?setFilterProducts(products)
        :setFilterProducts(productsFilter)
        
      })
      .catch((error) => {
        console.log('error', error);
      });
  }
  


  return(
    <div  className={styles.containerNav}>
      <ul className={styles.navUl}>      
        {
          allCategories.map((item) =>{
            const {id, categorygender} = item
            return(
              <li id={id} className={isSelected == id ? styles.navLiSelected : styles.navLi} onClick={(e)=>onFilter(e, categorygender)}  key={id} >{categorygender}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default NavBar