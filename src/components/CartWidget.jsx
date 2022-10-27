import FeatherIcon from 'feather-icons-react'
import styles from './CartWidget.module.css'

const CartWidget = (props) => {

  const { number} = props

  return(
    <div aria-label='Mostrar compras del carrito' className={styles.containercart}>       
      <FeatherIcon size="36" className='logo 'icon="shopping-cart" />   
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