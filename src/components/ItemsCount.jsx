import { useState } from "react"
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
        <button onClick={putOff}  className="btn"> - </button>
        <div className="number">{number}</div>
        <button onClick={addOn} className="btn"> + </button>      
      </div>
      <button onClick={addCart} className="addCart">Agregar al carrito</button>
    </div>
    
  )
}

export default ItemsCount