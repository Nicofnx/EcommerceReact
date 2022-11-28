import { useContext } from "react"
import Button from "./Button"
import styles from "./Styles/ItemsCount.module.css"
import DataContext from '../context/DataContext'

const ItemsCount = (props) => {
  
  const {stock} = props
  

  const {number, setNumber} = useContext(DataContext)
 

  const addOn = () => {
    if (stock > number ){
      setNumber(number + 1)
    }
  }

  const putOff = () =>{
    if (number > 1) {
      setNumber(number - 1)
    }
  }

  

  return(
    <div  className={styles.container}>
      <p>Cantidad:</p>
      <div className={styles.container__selector}>
        <Button
          onClick={putOff} 
          mystyle='btn'
          > - 
        </Button>
        
        <div className={styles.number}>{number}</div>
        
        <Button
          onClick={addOn} 
          mystyle='btn'
          > + 
        </Button>      
      </div>      
      <p >Stock: {stock} unidades</p>
    </div>
    
  )
}

export default ItemsCount