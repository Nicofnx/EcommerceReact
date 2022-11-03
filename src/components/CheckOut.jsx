import styles from './CheckOut.module.css'
import accounting from 'accounting'
import CardCheckOut from './CardCheckOut'
import Button from './Button'
import { useState, useContext } from 'react'

import { useStateValue } from '../context/BasketContext'

const CheckOut = (props) => {

  const [ {basket}, dispatch] = useStateValue()
  console.log(basket)


  return (
    <div className={styles.container}>
      <div className={styles.containercards}>
        {
          basket?.map((el, index)=>{
            return(
              <CardCheckOut
                key = {index}
                basket = {el}
              />
            )
          })
        }
        
        
      </div>
      <div className={styles.containertotal}>
        <p>Total de la compra: 
          <span>
            {accounting.formatMoney(74500, '$', '.', '.', 0)}
          </span> 
        </p>
        <Button
          mystyle = 'btnBuy'
        >
          Finalizar compra
        </Button>
      </div>
    </div>
  )
}

export default CheckOut