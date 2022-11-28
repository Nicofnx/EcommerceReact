import Button from './Button'
import accounting from 'accounting'
import FeatherIcon from 'feather-icons-react'
import styles from './Styles/CardCheckOut.module.css'


import { actionTypes } from '../context/reducer'
import { useStateValue } from '../context/BasketContext'


const CardCheckOut = (props) => {
  
  const [ {basket}, dispatch] = useStateValue()
  const {id, img, mark, model, description, price, number, sizeChose, idSize } = props.basket
  const sizeNumber = sizeChose.slice(1)
  
  
  const deleteItem = () => {
    dispatch({
      type: actionTypes.DElETE_TO_BASKET,
      id,
      sizeChose,
      idSize,
    })
  }

  return(
    <div  className={styles.container}>
        <div  className={styles.containerCard}>
          <div  className={styles.containerImg}>
            <img className={styles.imgCard} src={img.general} alt="zapatilla" />
          </div>
          <div  className={styles.marckAndDescription}>
            <div className={styles.markAndmodel}>
              <h3>{mark}</h3>
              <h4>{model}</h4>
            </div>
            <p>{description}</p>
          </div>
          <div className={styles.containerbuttoms}>
            <div>
              <p>Cantidad: {number}</p>
              <p>{accounting.formatMoney((price*number), '$', '.', '.', 0)}</p>
              <p>Talle: {sizeNumber}</p>
            </div>
          </div>
        </div>
        <div className={styles.containerTrash}>
          <Button 
            id = {id}
            onClick = {deleteItem}
            mystyle='btnFavorite'>              
            <FeatherIcon  size="34" className= 'logo'   icon="trash-2" />
          </Button>

        </div>
        
      </div>
  )
}

export default CardCheckOut