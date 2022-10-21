import FeatherIcon from 'feather-icons-react'
import Button from './Button'
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
          style='btnSearch'>
            <FeatherIcon icon="search" />
          </Button>
          
        </div>
      </div>
      <div className='boxs'>
        <div className='boxLogos'>
          <Button
          style='btnLogo'>
            <FeatherIcon size="26" className='logo' icon="heart" />
          </Button>
          <Button
          style='btnLogo'>
            <FeatherIcon size="26" className='logo' icon="user" />
          </Button>
          <Button
          style='btnLogo'>
            <FeatherIcon size="26" className='logo' icon="shopping-cart" />
          </Button>
             
        </div>
      </div>  
      </div>    
    </div>
  )
}

export default Header