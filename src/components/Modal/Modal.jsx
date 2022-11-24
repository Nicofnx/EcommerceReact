import Button from '../Button'
import styles from './Modal.module.css'
import BtnSelectImg from './BtnSelectImg'
import accounting from 'accounting'

import { useState, useContext } from 'react'
import ItemsCount from '../ItemsCount'
import DataContext from '../../context/DataContext'
import { actionTypes } from '../../context/reducer'
import { useStateValue } from '../../context/BasketContext'

const imagesIndex = {
  0: 'general',
  1: 'side',
  2: 'pair'
}

const Modal = () => {

  
  const {infoModal, setModalOpen, number, setNumber} = useContext(DataContext)
  const {id, mark, model, description, price, size, stock, img} = infoModal
  const [imgShow, setImgShow] = useState(img[imagesIndex[0]])
  const [btngalleyImg, setBtnGalletyImg] = useState(0)
  const [sizeChose, setSizeChose] = useState(null)
  const [ {basket}, dispatch] = useStateValue()
  const idSize = id+sizeChose

  


   


  
  
  const changeSelected = ({id}) =>{
    setBtnGalletyImg(id)
    
    setImgShow(img[imagesIndex[id]])
    
  }


  const closeModal=()=>{
    setModalOpen(false)
  }



  const handleSizeSelect = (e) => {
    
    setSizeChose(e.target.value)
  }

  

  const addToBasket= (sizeChose, id, idSize) => {
    
    if (sizeChose === null){
      alert('No ingreso un talle')
    }
    else {
      if(basket?.some(basketItem => basketItem.idSize === idSize) ){
        alert('Producto ya agregado al carrito')
      }else{
        dispatch({
          type: actionTypes.ADD_TO_BASKET,
          item: {
            idSize: id+sizeChose,
            id,
            mark,
            model,
            sizeChose,
            description,
            price,
            img,
            number,
          }
        })
        alert('Su pedido fue cargado con exito')
        setNumber(1)
        setModalOpen(false)
        
      }
    }
    
    
  }
  

  return (
    <div id={id} className={styles.overlay}>
      <div  className={styles.container}>
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
            <h2>{mark} {model}</h2>
            <h2>{accounting.formatMoney(price, '$', '.', '.', 0)}</h2>
          </div>
          <div className={styles.sizeamount}>
              <div className={styles.size}>
                <label>Talle:</label>
                <select onChange={handleSizeSelect} name="sizes"id="sizes">
                <option value={null}></option>
                  {
                    size.map(((size, index)=>{
                      return <option key= {index} value={`T${size}`}>{size}</option>
                      
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
                  onClick = {()=>addToBasket(sizeChose, id, idSize)}                  
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