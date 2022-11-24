
import styles from './ListFavorites.module.css'
import { useStateValue } from '../context/BasketContext'
import DataContext from '../context/DataContext'
import { useContext } from 'react'
import ItemFavotire from './ItemFavorite'

const ListFavorites = () => {

  const [ {favorites} ] = useStateValue()
  const {isActiveFavorites} = useContext(DataContext)

  return(
    <div className={isActiveFavorites ? styles.container : styles.none}>
      <h2 className={styles.titleFav}>Favoritos</h2>
      {
          favorites.length === 0
          ? <h3 className={styles.titleNoProducts}>No hay favoritos guardados</h3>
          :favorites?.map((el)=>{
            return(
              <ItemFavotire 
                key = { el.id }
                item = {el}
              />

              
            )
          })
        }

    </div>
  )
}


export default ListFavorites