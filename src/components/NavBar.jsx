import styles from "./Styles/NavBar.module.css"
import { useState, useContext } from "react"
import DataContext from '../context/DataContext'
import { useLocation } from 'react-router-dom'

const NavBar = () => {
  
  const locationPath = useLocation()
  const { products, setFilterProducts,allCategories } = useContext(DataContext)
  const [isSelected, setIsSelected] = useState(1)
  

  
  
  const onFilter = (e, categorygender) => {
    
    setIsSelected(e.target.id)

    const productsFilter = categorygender === 'Todo'
      ? products
      : products.filter((product) => product.gender === categorygender)

    setFilterProducts(productsFilter)
  }
  


  return(
    <div  className={locationPath.pathname === '/' ?styles.containerNav :styles.containerNavHidden}>
      <ul className={styles.navUl}>      
        {
          allCategories.map((item) =>{
            const {id, categorygender} = item
            return(
              <li id={id} className={isSelected === String(id) || isSelected === id ? styles.navLiSelected : styles.navLi} onClick={(e)=>onFilter(e, categorygender)}  key={id} >{categorygender}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default NavBar
