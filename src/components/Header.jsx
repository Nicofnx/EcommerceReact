import FeatherIcon from 'feather-icons-react'
import Button from './Button'
import CartWidget from './CartWidget'
import './Header.css'

const Header = () => {
  return(
    <div className='headerBox'>
      <div className="containerHeader">
      <div className='boxs'>
        <h2>RuNstyle</h2>
      </div>
      <div className='boxs'>
        <div className='boxSearch'>
          <input className='inputHeader' type="text" placeholder="Buscar..." />
          <Button
          mystyle='btnSearch'>
            <FeatherIcon icon="search" />
          </Button>
          
        </div>
      </div>
      <div className='boxs'>
        <div className='boxLogos'>
          <Button
            mystyle='btnLogo'>
            <FeatherIcon size="32" className='logo' icon="heart" />
          </Button>
          <Button
            mystyle='btnLogo'>
            <FeatherIcon size="32" className='logo' icon="user" />
          </Button>
          <CartWidget />             
        </div>
      </div>  
      </div>    
    </div>
  )
}

export default Header