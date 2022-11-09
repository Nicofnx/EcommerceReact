import styles from './Card.module.css'
import FeatherIcon from 'feather-icons-react'
import Button from './Button'
import { useState, useContext } from 'react'
import accounting from 'accounting'
import DataContext from '../context/DataContext'


const Card = ({item, goToDetails}) => {
  
  const {id, img, mark, model, description, price } = item
  
  const { setInfoModal, setModalOpen} = useContext(DataContext)
  

  const [fav, setFav] = useState(false)
  
  
  
  
  
  const dataToModal = (data) => {
    setInfoModal(data)
    setModalOpen(true)
    
    
  }
 
  const onClick = (e) => {
    setFav(!fav)
    
  }

  return(
    <div id={id}>
      <div  className={styles.containerBox}>
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
              onClick = {onClick}
              mystyle='btnFavorite'>              
              <FeatherIcon  size="22" className= {styles.logo} fill={fav===false ? "none" :"white"}  icon="heart" />
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
    </div>
  )
}

export default Card