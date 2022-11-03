import FeatherIcon from 'feather-icons-react'
import Button from './Button'
import CartWidget from './CartWidget'
import styles from './Header.module.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import logomarck from '../imagenes/RuNstylesLogo.png'

const Header = () => {
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
          <input className={styles.inputHeader} type="text" placeholder="Buscar..." />
          <Button
          mystyle='btnSearch'>
            <FeatherIcon icon="search" />
          </Button>
          
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
              number = {1}
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