import './Card.css'
import FeatherIcon from 'feather-icons-react'
import zapa from '../imagenes/zapamuestra.png'
import Button from './Button'


const Card = () => {
  return(
    <div>
      <div className="containerBox">
        <div className="containerImg">
          <img className='imgCard' src={zapa} alt="zapatilla" />
        </div>
        <div className="marckAndDescription">
          <h3>Nike</h3>
          <p>Calzado de running en carretera para hombre Downshifter 11</p>
        </div>
        <div className="containerbuttoms">
          <p>$18.500</p>
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