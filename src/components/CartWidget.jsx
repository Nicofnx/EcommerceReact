import FeatherIcon from 'feather-icons-react'
import styles from './CartWidget.module.css'

const CartWidget = (props) => {

  const { number = 1 } = props

  return(
    <div className={styles.containercart}>
      <FeatherIcon size="36" className='logo 'icon="shopping-cart" />
      <div className={styles.bubble}>
        {number}
      </div>
    </div>
  )
}

export default CartWidget