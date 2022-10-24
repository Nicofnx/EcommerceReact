import FeatherIcon from 'feather-icons-react'
import './CartWidget.css'

const CartWidget = (props) => {

  const { number = 1 } = props

  return(
    <div className="containercart">
      <FeatherIcon size="32" className='logo logocart' icon="shopping-cart" />
      <div className="bubble">
        {number}
      </div>
    </div>
  )
}

export default CartWidget