import styles from "./NavBar.module.css"
import { useState, useContext } from "react"
import DataContext from '../context/DataContext'

const NavBar = () => {

  const menuItems = ["Todo", "Hombre", "Mujer", "Infantil"]
  
  const { products, setFilterProducts } = useContext(DataContext)

  const handleFilter = (e) => {
    
    const filterGender = e.target.textContent
    const newFilterGender = products.filter(product => product.gender.includes(filterGender) )
    filterGender === 'Todo'
    ?setFilterProducts(products)
    :setFilterProducts(newFilterGender)
  }
  

  return(
    <div  className={styles.containerNav}>
      <ul className={styles.navUl}>      
        {
          menuItems.map((item, index) =>{
            return(
              <li className={styles.navLi} onClick={handleFilter} value={item} key={index} >{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default NavBar