import styles from './Card.module.css'
import FeatherIcon from 'feather-icons-react'
import zapa from '../imagenes/zapamuestra.png'
import Button from './Button'


const Card = (props) => {

  const {id, imgCard, mark, description, price } = props

  const redirection = () => {
    console.log('redireccionar por id', id)
  }

  return(
    <div id={id}>
      <div  className={styles.containerBox}>
        <div onClick={redirection} className={styles.containerImg}>
          <img className={styles.imgCard} src={zapa} alt="zapatilla" />
        </div>
        <div onClick={redirection} className={styles.marckAndDescription}>
          <h3>{mark}</h3>
          <p>{description}</p>
        </div>
        <div className={styles.containerbuttoms}>
          <p>${price}</p>
          <div className={styles.buttons}>
            <Button 
              mystyle='btnFavorite'>
              <FeatherIcon size="18" className='logo' icon="heart" />
            </Button>
            <Button 
              mystyle='btnBuy'>
              Comprar
            </Button>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card