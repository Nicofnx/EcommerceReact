import Button from './Button'
import styles from './Modal.module.css'
import products from '../products-data'
import accounting from 'accounting'
import FeatherIcon from 'feather-icons-react'
import { useState, useContext } from 'react'
import ItemsCount from './ItemsCount'
import DataContext from '../context/DataContext'

const Modal = (props) => {

  const [fav, setFav] = useState(false)
  const [isActive, setIsActive] = useState(true)
  const {infoModal, setModalOpen} = useContext(DataContext)
   
  const onClick = (e) => {
    setFav(!fav)
    
  }

  const changeSelected = () =>{
    setIsActive(!isActive)
  }

  const closeModal=()=>{
    setModalOpen(false)
  }

  const addToCart = () => {
    
    alert('Su pedido fue cargado con exito')
  }


  const {id, mark, model, description, price, size, stock, img} = infoModal  
  

  return (
    <div className={styles.fullcontainer}>
      <div id={id} className={styles.container}>
        <div onClick={closeModal} className={styles.btnclosed}>X</div>
        <div className={styles.container__img}>
          <img className={styles.img__products} src={img.general} alt="" />
        </div>
        <div className={styles.selector__img}>      
          <div onClick={changeSelected} className={isActive ?styles.isActive :styles.selector}></div>
          <div className={styles.selector}></div>
          <div className={styles.selector}></div>
        </div>
        <div className={styles.container__data}>
          <div className={styles.modelprice}>
            <h2>{model}</h2>
            <h2>{accounting.formatMoney(price, '$', '.', '.', 0)}</h2>
          </div>
          <div className={styles.sizeamount}>
              <div className={styles.size}>
                <label for="number">Talle:</label>
                <select name="lenguajes" id="lang">
                  {
                    size.map((size=>{
                      return <option value="number">{size}</option>
                    }))
                  }
                              
                </select>   
              </div>
              <div className={styles.amount}>
                <ItemsCount
                  initial = {1}
                  stock = {stock}
                /> 
              </div>
          </div>
          <div className={styles.description}>
                <p>{description}</p>
              </div>
              <div className={styles.btns}>
              <Button 
                  id = {id}
                  onClick = {onClick}
                  mystyle='btnFavorite'>              
                  <FeatherIcon  size="18" className= 'logo' fill={fav===false ? "none" :"white"}  icon="heart" />
                </Button>
                <Button 
                  onClick = {addToCart}                  
                  mystyle='btnBuy'>
                  Agregar al carrito
                </Button>
              </div>
        </div>
      </div>
    </div>
    
  )
}

export default Modal