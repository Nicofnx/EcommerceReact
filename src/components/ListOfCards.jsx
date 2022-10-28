import styles from './ListOfCards.module.css'
import Card from './Card'
import ItemsCount from './ItemsCount';
import products from '../products-data';







const ListOfCards = (props) => {

  const {greeting} = props

  return(
    <>
    <h1>{ greeting }</h1>
    <div className={styles.containerList}>
      
      <aside className={styles.filters}>
      </aside>
      <div className={styles.listCards}>
        {
          products.map((product)=>{
            const {id} = product
            return(
              <Card
                key = {id} 
                product = {product}
              />
            )
          })
        }
        
        
      </div>
      
    </div>
    </>
    
  )
}

export default ListOfCards

