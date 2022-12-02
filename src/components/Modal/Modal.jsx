import Button from '../Button'
import styles from './Modal.module.css'
import BtnSelectImg from './BtnSelectImg'
import accounting from 'accounting'

import { useState, useContext, useEffect } from 'react'
import ItemsCount from '../ItemsCount'
import DataContext from '../../context/DataContext'
import { actionTypes } from '../../context/reducer'
import { useStateValue } from '../../context/BasketContext'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const imagesIndex = {
  0: 'general',
  1: 'side',
  2: 'pair'
}

const Modal = () => {

  const MySwal = withReactContent(Swal)
  const {infoModal, setModalOpen, number, setNumber} = useContext(DataContext)
  const {id, mark, model, description, price, size, stock, img} = infoModal
  const [imgShow, setImgShow] = useState(img[imagesIndex[0]])
  const [btngalleyImg, setBtnGalletyImg] = useState(0)
  const [sizeChose, setSizeChose] = useState(null)
  const [ {basket}, dispatch] = useStateValue()
  const idSize = id+sizeChose
  const [buyDisable, setBuyDisable] = useState(true)

  


   


  
  
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
        MySwal.fire({
          position: 'top',
          imageUrl: 'https://media0.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.gif?cid=790b7611b9f84714fad1492eeaedbb79e39f9985eac4469d&rid=giphy.gif&ct=s',
          title: 'Producto agregado al carrito',
          showConfirmButton: false,
          timer: 2000
        })
        setNumber(1)
        setModalOpen(false)
        
      }
    
    
    
  }

 


  useEffect(() => {
    if(sizeChose === null|| sizeChose ==='' || basket?.some(basketItem => basketItem.idSize === idSize)){
      setBuyDisable(false) 
    }else{ setBuyDisable(true)}
  }, [sizeChose])
  
  

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
                {(sizeChose === null|| sizeChose ==='')?<p className={styles.warning}>Indique talle</p>:null}
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
              {basket?.some(basketItem => basketItem.idSize === idSize)?<p className={styles.warning2}>Producto ya agregado</p>:null}              
                <Button 
                  onClick = {()=>addToBasket(sizeChose, id, idSize)}                  
                  mystyle='btnBuy'
                  state = {buyDisable}
                  >
                  Agregar al carrito
                </Button>
              </div>
        </div>
      </div>
    </div>
    
  )
}

export default Modal