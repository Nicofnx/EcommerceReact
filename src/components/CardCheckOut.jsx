import Button from './Button'
import accounting from 'accounting'
import FeatherIcon from 'feather-icons-react'
import styles from './CardCheckOut.module.css'



const CardCheckOut = (props) => {

  
  const {id, img, mark, model, description, price, number } = props.basket
  

  return(
    <div  className={styles.containerCard}>
        <div  className={styles.containerImg}>
          <img className={styles.imgCard} src={img.general} alt="zapatilla" />
        </div>
        <div  className={styles.marckAndDescription}>
          <h3>{mark}</h3>
          <h4>{model}</h4>
          <p>{description}</p>
        </div>
        <div className={styles.containerbuttoms}>
          <div>
            <p>Cantidad: {number}</p>
            <p>{accounting.formatMoney((price*number), '$', '.', '.', 0)}</p>
          </div>
          <div className={styles.buttons}>
            <Button 
              id = {id}
              onClick = {null}
              mystyle='btnFavorite'>              
              <FeatherIcon  size="34" className= 'logo'   icon="trash-2" />
            </Button>
          </div>
        </div>
        
      </div>
  )
}

export default CardCheckOut