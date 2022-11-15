import styles from './Card.module.css'
import FeatherIcon from 'feather-icons-react'
import Button from './Button'
import { memo, useContext } from 'react'
import accounting from 'accounting'
import DataContext from '../context/DataContext'
import { actionTypes } from '../context/reducer'
import { useStateValue } from '../context/BasketContext'


const Card = ({item, goToDetails, isFavorite}) => {
  
  const {id, img, mark, model, description, price } = item
  const [ {favorites}, dispatch] = useStateValue()
  const { setInfoModal, setModalOpen} = useContext(DataContext)
  
  
  
  
  const addToFavorites = () => {
    
    if (!isFavorite){
      
      dispatch({
        type: actionTypes.ADD_TO_FAVORITES,
        item: {
          id,
          mark,
          model,
          price,
          img,
          
        }
      })
    }else {
      
      dispatch({
        type: actionTypes.DElETE_TO_FAVORITES,
        id
      })
    }

    
    
  }
  
  
  const dataToModal = (data) => {
    setInfoModal(data)
    setModalOpen(true)
    
    
  }
 
 

  return(
    <div id={id} className={styles.containerBox}>
        <div className={styles.containerImg}>
          <img onClick={() => goToDetails(item)} className={styles.imgCard} src={img.general} alt="zapatilla" />
        </div>
        <div  className={styles.marckAndDescription}>
          <h3>{mark}</h3>
          <h4>{model}</h4>
          <p>{description}</p>
        </div>
        <div className={styles.containerbuttoms}>
          <p>{accounting.formatMoney(price, '$', '.', '.', 0)}</p>
          <div className={styles.buttons}>
            <Button 
              id = {id}
              onClick = {()=>addToFavorites(item)}
              mystyle='btnFavorite'>              
              <FeatherIcon  size="22" className= {styles.logo} fill={isFavorite===false ? "none" :"white"}  icon="heart" />
            </Button>
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

export default Card