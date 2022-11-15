import FeatherIcon from 'feather-icons-react'
import Button from './Button'
import CartWidget from './CartWidget'
import styles from './Header.module.css'
import {
  NavLink
} from "react-router-dom";
import logomarck from '../imagenes/RuNstylesLogo.png'
import { useStateValue } from '../context/BasketContext'
import DataContext from '../context/DataContext'
import { useCallback, useContext} from 'react';

const Header = () => {

  const [ {basket} ] = useStateValue()
  const { products, setFilterProducts, isActiveFavorites, setIsActiveFavorites } = useContext(DataContext)
  

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

  const onHandleChange = useCallback(debounce((e) => {    
    const searchValue = e.target.value.toLowerCase();    
    const firstLeterMayus = searchValue !== ''
      ? searchValue[0].toUpperCase()+searchValue.substring(1) 
      : '';    
    const newFilter = products.filter(product => product.mark.includes(firstLeterMayus) );
    
    setFilterProducts(newFilter);
  }, 500), [products, setFilterProducts]);

  const handleFavorites = () => {
    setIsActiveFavorites(!isActiveFavorites)
  }


  return(
    <div className={styles.headerBox}>
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
            <FeatherIcon size="36" className={!isActiveFavorites ?styles.logo :styles.logoIsAvtive} icon="heart" onClick= {handleFavorites} />
            <h4 className={styles.titleLogo}>Favoritos</h4>
          </Button>
          <Button
            mystyle='btnLogo'>
            <FeatherIcon size="36" className={styles.logo}  icon="user" />
            <h4 className={styles.titleLogo}>Perfil</h4>
          </Button>
          <div className={styles.containerCart}>
          <NavLink to='/checkout-page' className={styles.logo}>
            <CartWidget 
              number = {basket.length}
            />   
          </NavLink>
          <h4 className={styles.titleLogo}>Compras</h4>
          </div>
                    
        </div>
      </div>  
      </div>    
    </div>
  )
}

export default Header