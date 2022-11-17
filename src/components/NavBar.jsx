import styles from "./NavBar.module.css"
import { useState, useContext } from "react"
import DataContext from '../context/DataContext'

const NavBar = () => {

  const menuItems = [
    {
      name :"Todo",
      id: 1
    },
    {
      name :"Hombre",
      id: 2
    },
    {
      name :"Mujer",
      id: 3
    },
    {
      name :"Infantil",
      id: 4
    }
  ]
  
  const { products, setFilterProducts } = useContext(DataContext)
  const [isSelected, setIsSelected] = useState(1)

  const handleFilter = (e) => {
    setIsSelected(e.target.id)

    const filterGender = e.target.textContent
    const newFilterGender = products.filter(product => product.gender.includes(filterGender) )
    filterGender === 'Todo'
    ?setFilterProducts(products)
    :setFilterProducts(newFilterGender)
    
  }
  console.log(isSelected)
  

  return(
    <div  className={styles.containerNav}>
      <ul className={styles.navUl}>      
        {
          menuItems.map((item, index) =>{
            return(
              <li id={item.id} className={isSelected == item.id ? styles.navLiSelected : styles.navLi} onClick={handleFilter}  key={index} >{item.name}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default NavBar