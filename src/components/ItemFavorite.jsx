import styles from './Styles/ItemFavorite.module.css'
import { actionTypes } from '../context/reducer'
import { useStateValue } from '../context/BasketContext'
import Button from './Button'
import FeatherIcon from 'feather-icons-react'
import { useContext } from 'react'
import DataContext from '../context/DataContext'

const ItemFavotire = ({item, goToDetails}) => {
  
  const {id, img, mark, model} = item
  const [ {basket}, dispatch] = useStateValue()
  const {fav, setFav} = useContext(DataContext)

  const deleteItem = () => {
    setFav(!fav)
    dispatch({
      type: actionTypes.DElETE_TO_FAVORITES,
      id
    })
  }
 
  return(
    <div className={styles.container}>
      <div className={styles.containerData} onClick={()=>goToDetails(id)}>
        <img className={styles.imgfavorite} src={img.general} alt='imagen zapatilla' />
        <p>{mark}</p>
        <p>{model}</p>
      </div>
      <Button 
        id = {id}
        onClick = {deleteItem}
        mystyle='btnFavoriteDelete'>              
        <FeatherIcon  className= 'logo'   icon="trash-2" />
      </Button>
    </div>
  )
}

export default ItemFavotire