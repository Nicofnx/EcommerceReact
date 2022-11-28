import styles from './Styles/CardDetails.module.css'
import BtnSelectImg from './Modal/BtnSelectImg'
import accounting from 'accounting'
import { useState, useEffect, useContext } from 'react'
import DataContext from '../context/DataContext'
import Button from './Button'

const imagesIndex = {
  0: 'general',
  1: 'side',
  2: 'pair'
}

const CardDetails = ({item}) => {
  

  
  
  const {id, mark, model, description, price, stock, img} = item
 
  const { setInfoModal, setModalOpen} = useContext(DataContext)
  const [imgShow, setImgShow] = useState(img[imagesIndex[0]])
  const [btngalleyImg, setBtnGalletyImg] = useState(0)

  
  useEffect(() => {
    setImgShow(img[imagesIndex[0]])    
  }, [img])
  
  

  
  const changeSelected = ({id}) =>{
    setBtnGalletyImg(id)
    
    setImgShow(img[imagesIndex[id]])
    
  }

  const dataToModal = (data) => {
    setInfoModal(data)
    setModalOpen(true)
    
    
  }


  

  return (
    
      <div id={id} className={styles.container}>
        
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
          
          <div className={styles.description}>
                <p>{description}</p>
              </div>
              <div className={styles.btns}>
                <p className={styles.description}>Quedan solo {stock} en Stock!</p>
                <Button 
                  id = {id}
                  mystyle='btnBuy'
                  onClick={()=>{dataToModal(item)}}
                  >
                  Comprar
                </Button>
              </div>
        </div>
      </div>
    
    
  )
}

export default CardDetails