import styles from './CheckOut.module.css'
import accounting from 'accounting'
import CardCheckOut from './CardCheckOut'
import Button from './Button'

const CheckOut = (props) => {




  return (
    <div className={styles.container}>
      <CardCheckOut />
      <CardCheckOut />
      <CardCheckOut />
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