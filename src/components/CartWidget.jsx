import FeatherIcon from 'feather-icons-react'
import styles from './CartWidget.module.css'
import { useLocation } from 'react-router-dom'

const CartWidget = (props) => {

  const locationPath = useLocation()

  const { number } = props
  

  return(
    <div aria-label='Mostrar compras del carrito' className={styles.containercart}>       
      <FeatherIcon size="36" className={locationPath.pathname === '/checkout-page' ?styles.logoIsActive: styles.logo} icon="shopping-cart" />   
      {number > 0 
        ?<div className={styles.bubble}>
          {number}
        </div>
        :null
      }
    </div>
  )
}

export default CartWidget