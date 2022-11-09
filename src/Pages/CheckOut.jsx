import styles from './CheckOut.module.css'
import accounting from 'accounting'
import CardCheckOut from '../components/CardCheckOut'
import Button from '../components/Button'


import { useStateValue } from '../context/BasketContext'

const CheckOut = (props) => {

  const [ {basket} ] = useStateValue()
  


  return (
    <div className={styles.container}>
      <div className={styles.containercards}>
        {
          basket.length === 0
          ? <h2 className={styles.titleNoProducts}>No hay nada en el carrito</h2>
          :basket?.map((el, index)=>{
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