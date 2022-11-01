import Button from './Button'
import styles from './Modal.module.css'
import products from '../products-data'
import accounting from 'accounting'
import FeatherIcon from 'feather-icons-react'
import { useState, useContext } from 'react'
import ItemsCount from './ItemsCount'
import DataContext from '../context/DataContext'

const imagesIndex = {
  0: 'general',
  1: 'side',
  2: 'pair'
}

const Modal = (props) => {

  const [fav, setFav] = useState(false)  
  const {infoModal, setModalOpen} = useContext(DataContext)
  const {id, mark, model, description, price, size, stock, img} = infoModal  
  const [imgShow, setImgShow] = useState(img[imagesIndex[0]])
  const [isActiveImgModal, setIsActiveImgModal] = useState(false)
  const [btngalleyImg, setBtnGalletyImg] = useState(0)


  const BtnSelectImg = (props) => {

    const handleOnClick = ({e, id}) => {
      if(props.onClick){
        props.onClick({e, id})
      }
    }
    return(
      <div key={props.btnId} id={props.btnId} onClick={(e)=>{handleOnClick({e, id:props.btnId})}} className={props.stateOn ? styles.isActive : styles.selector}> </div>
    )
  }


   
  const onClick = () => {
    setFav(!fav)
    
  }

  
  
  const changeSelected = ({e, id}) =>{
    setBtnGalletyImg(id)
    
    setImgShow(img[imagesIndex[id]])
    
    }


  const closeModal=()=>{
    setModalOpen(false)
  }

  const addToCart = () => {
    
    alert('Su pedido fue cargado con exito')
  }


  return (
    <div className={styles.fullcontainer}>
      <div id={id} className={styles.container}>
        <div onClick={closeModal} className={styles.btnclosed}>X</div>
        <div className={styles.container__img}>
          <img className={styles.img__products} src={imgShow} alt="" />
        </div>
        <div className={styles.selector__img}>
          <BtnSelectImg            
            btnId={0}
            onClick = {changeSelected}
            stateOn = {btngalleyImg===0}
            
          />   
          <BtnSelectImg            
            btnId={1}
            onClick = {changeSelected}
            stateOn = {btngalleyImg===1}
          /> 
          <BtnSelectImg            
            btnId={2}
            onClick = {changeSelected}
            stateOn = {btngalleyImg===2}
          />    
          
          
        </div>
        <div className={styles.container__data}>
          <div className={styles.modelprice}>
            <h2>{model}</h2>
            <h2>{accounting.formatMoney(price, '$', '.', '.', 0)}</h2>
          </div>
          <div className={styles.sizeamount}>
              <div className={styles.size}>
                <label>Talle:</label>
                <select name="lenguajes" id="lang">
                  {
                    size.map(((size, index)=>{
                      return <option key= {index} value="number">{size}</option>
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