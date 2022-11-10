import styles from './ItemFavorite.module.css'

const ItemFavotire = (props) => {
  const {item} = props
 
  return(
    <div className={styles.container}>
      <img className={styles.imgfavorite} src={item.img.general} alt='imagen zapatilla' />
      <p>{item.mark}</p>
      <p>{item.model}</p>
    </div>
  )
}

export default ItemFavotire