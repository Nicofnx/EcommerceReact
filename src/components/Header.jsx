import FeatherIcon from 'feather-icons-react'
import Button from './Button'
import CartWidget from './CartWidget'
import styles from './Header.module.css'
import {
  Link
} from "react-router-dom";
import logomarck from '../imagenes/RuNstylesLogo.png'
import { useStateValue } from '../context/BasketContext'
import DataContext from '../context/DataContext'
import { useCallback, useContext} from 'react';

const Header = () => {

  const [ {basket} ] = useStateValue()
  const {products, setProducts, filterProducts, setFilterProducts} = useContext(DataContext)
  

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
    const searchValue = e.target.value != '' 
      ? e.target.value[0].toUpperCase()+e.target.value.substring(1) 
      : '';
    const newFilter = products.filter(product => product.mark.includes(searchValue) );
    
    setFilterProducts(newFilter);
  }, 500), [products, setFilterProducts]);


  return(
    <div className={styles.headerBox}>
      <div className={styles.containerHeader}>
      <div className={styles.boxs}>
        <Link to='/'>
         <img src={logomarck} alt=""  className={styles.titlemark}/>
        </Link>
        
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
            <FeatherIcon size="36" className={styles.logo} icon="heart" />
            <h4 className={styles.titleLogo}>Favoritos</h4>
          </Button>
          <Button
            mystyle='btnLogo'>
            <FeatherIcon size="36" className={styles.logo}  icon="user" />
            <h4 className={styles.titleLogo}>Perfil</h4>
          </Button>
          <div className={styles.containerCart}>
          <Link to='/checkout-page' className={styles.logo}>
            <CartWidget 
              number = {basket.length}
            />   
          </Link>
          <h4 className={styles.titleLogo}>Compras</h4>
          </div>
                    
        </div>
      </div>  
      </div>    
    </div>
  )
}

export default Header