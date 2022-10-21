import './Card.css'
import FeatherIcon from 'feather-icons-react'
import zapa from '../imagenes/zapamuestra.png'
import Button from './Button'


const Card = (props) => {

  const {id, imgCard, mark, description, price } = props

  const alerta = () => {
    console.log('redireccionar por id', id)
  }

  return(
    <div id={id}>
      <div onClick={alerta} className="containerBox">
        <div className="containerImg">
          <img className='imgCard' src={zapa} alt="zapatilla" />
        </div>
        <div className="marckAndDescription">
          <h3>{mark}</h3>
          <p>{description}</p>
        </div>
        <div className="containerbuttoms">
          <p>${price}</p>
          <div className="buttons">
            <Button style='btnFavorite'>
              <FeatherIcon size="18" className='logo' icon="heart" />
            </Button>
            <Button style='btnBuy'>
              Comprar
            </Button>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card