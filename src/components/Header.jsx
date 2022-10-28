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

const Header = () => {
  return(
    <div className={styles.headerBox}>
      <div className={styles.containerHeader}>
      <div className={styles.boxs}>
        <Link to='/' className={styles.titlemark}>
         <h2>RuNstyle</h2>
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
            <FeatherIcon size="36" className='logo' icon="heart" />
          </Button>
          <Button
            mystyle='btnLogo'>
            <FeatherIcon size="36" className='logo' icon="user" />
          </Button>
          <Link to='/checkout-page'>
            <CartWidget 
              number = {1}
            />   
          </Link>
                    
        </div>
      </div>  
      </div>    
    </div>
  )
}

export default Header