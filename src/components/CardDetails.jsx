import Button from './Button'
import styles from './CardDetails.module.css'
import BtnSelectImg from './Modal/BtnSelectImg'
import accounting from 'accounting'
import FeatherIcon from 'feather-icons-react'
import { useState } from 'react'



const imagesIndex = {
  0: 'general',
  1: 'side',
  2: 'pair'
}

const CardDetails = ({item}) => {

  const [fav, setFav] = useState(false)  
  
  const {id, mark, model, description, price, stock, img} = item
  const [imgShow, setImgShow] = useState(img[imagesIndex[0]])
  const [btngalleyImg, setBtnGalletyImg] = useState(0)


  

  


   
  const onClick = () => {
    setFav(!fav)
    
  }

  
  
  const changeSelected = ({id}) =>{
    setBtnGalletyImg(id)
    
    setImgShow(img[imagesIndex[id]])
    
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
              <Button 
                  id = {id}
                  onClick = {onClick}
                  mystyle='btnFavorite'>              
                  <FeatherIcon  size="18" className={styles.logo} fill={fav===false ? "none" :"white"}  icon="heart" />
                </Button>
                <p className={styles.description}>Quedan solo {stock} en Stock!</p>
              </div>
        </div>
      </div>
    
    
  )
}

export default CardDetails