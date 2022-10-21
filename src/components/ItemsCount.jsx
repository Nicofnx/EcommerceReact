import { useState } from "react"
import Button from "./Button"
import "./ItemsCount.css"

const ItemsCount = (props) => {
  
  const {stock, initial} = props
  
  const [number, setNumber] = useState(initial)
 

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

  const addCart = () => {
    setNumber(initial)
    alert('Su pedido fue cargado con exito')
  }

  return(
    <div className="container">
      <div className="container__selector">
        <Button
          onClick={putOff} 
          mystyle='btn'
          > - 
        </Button>
        
        <div className="number">{number}</div>
        
        <Button
          onClick={addOn} 
          mystyle='btn'
          > + 
        </Button>      
      </div>      
      <Button
          onClick={addCart} 
          mystyle='addCart'
          > Agregar al carrito 
        </Button>  
    </div>
    
  )
}

export default ItemsCount