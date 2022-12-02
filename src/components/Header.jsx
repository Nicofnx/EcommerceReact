import FeatherIcon from 'feather-icons-react'
import Button from './Button'
import CartWidget from './CartWidget'
import styles from './Styles/Header.module.css'
import { NavLink } from "react-router-dom";
import logomarck from '../imagenes/RuNstylesLogo.png'
import { useStateValue } from '../context/BasketContext'
import DataContext from '../context/DataContext'
import { useCallback, useContext} from 'react';
import Banner from './Banner';
import { useEffect, useState } from 'react';



const Header = () => {

  const [ {basket} ] = useStateValue()
  const { products, setFilterProducts, isActiveFavorites, setIsActiveFavorites, filterProducts} = useContext(DataContext)
  const [numberOfItems, setNumberOfItems] = useState(0)

  const debounce = (func, wait) => {
    let timeout;

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        }

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    }
}

  

  useEffect(()=>{
    let numberItems = []
    basket.map((item)=>{
      numberItems.push(item.number)
    })
    let total = numberItems.reduce((a, b) => a + b, 0)
    setNumberOfItems(total)

  },[basket])
  

  const onHandleChange = useCallback(debounce((e) => {    
    const searchValue = e.target.value.toLowerCase();    
    const firstLeterMayus = searchValue !== ''
      ? searchValue[0].toUpperCase()+searchValue.substring(1) 
      : '';    
    const newFilter = products.filter(product => product.mark.includes(firstLeterMayus) );
    
    setFilterProducts(newFilter);
  }, 500), [products, setFilterProducts, filterProducts]);

  const handleFavorites = () => {
    setIsActiveFavorites(!isActiveFavorites)
    
  }

  
  


  return(
    <div className={styles.headerBox}>
      <Banner />
      <div className={styles.containerHeader}>
        <div className={styles.boxs}>
          <NavLink to='/'>
          <img src={logomarck} alt=""  className={styles.titlemark}/>
          </NavLink>
          
        </div>
        <div className={styles.boxs}>
          <div className={styles.boxSearch}>
            <input className={styles.inputHeader} onChange={onHandleChange} type="text" placeholder="Busca por marca..." />
            
            
          </div>
        </div>
        <div className={styles.boxs}>
          <div className={styles.boxLogos}>
            <Button
              mystyle='btnLogo'>
              <FeatherIcon  className={!isActiveFavorites ?styles.logo :styles.logoIsAvtive} icon="heart" onClick= {handleFavorites} />
              
            </Button>
            {/* <Button
              mystyle='btnLogo'>
              <FeatherIcon size="36" className={styles.logo}  icon="user" />
              <h4 className={styles.titleLogo}>Perfil</h4>
            </Button> */}
            <div className={styles.containerCart}>
            <NavLink to='/checkout-page' className={styles.logo}>
              <CartWidget 
                number = {numberOfItems}
              />   
            </NavLink>
            
            </div>
                      
          </div>
        </div>  
      </div>    
    </div>
  )
}

export default Header