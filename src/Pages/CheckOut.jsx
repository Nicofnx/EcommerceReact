import styles from './CheckOut.module.css'
import accounting from 'accounting'
import CardCheckOut from '../components/CardCheckOut'
import Button from '../components/Button'
import { useLocation } from 'react-router-dom'
import { actionTypes } from '../context/reducer'
import { useStateValue } from '../context/BasketContext'
import { useState, useEffect } from 'react'

const CheckOut = (props) => {
  const params = useLocation()
  
  const [ {basket}, dispatch ] = useStateValue()
  const [addPrice, setAddPrice] = useState(0)
  

  useEffect(() => {
    let sumaPrice = 0
    for (let index = 0; index < basket.length; index++) {
      sumaPrice = sumaPrice + parseInt(basket[index].price)*basket[index].number
      setAddPrice(sumaPrice)
    }
    if(basket.length === 0) setAddPrice(0)
    
    
  }, [basket])
  
  const finishBuy = () => {
    if(basket.length===0){
      alert('No hay productos a comprar. Agregue productos al carrito')
    }else{
      dispatch({
        type: actionTypes.FINISH_BUY,      
      })
      alert('Compra Finalizada, recibira un mail')
      setAddPrice(0)

    }
  }

  


  return (
    <div className={styles.container}>
      <div className={styles.containercards}>
        {
          basket.length === 0
          ? <h2 className={styles.titleNoProducts}>No hay nada en el carrito</h2>
          :basket?.map((el, index)=>{
            return(
              <CardCheckOut
                key = {index}
                basket = {el}
                isActive = {params.pathname}
              />
            )
          })
        }
        
        
      </div>
      <div className={styles.containertotal}>
        <p>Total de la compra: 
          <span>
            {accounting.formatMoney(addPrice,"$" ,0, ".")}
          </span> 
        </p>
        <Button
          mystyle = 'btnBuy'
          onClick = {finishBuy}
        >
          Finalizar compra
        </Button>
      </div>
    </div>
  )
}

export default CheckOut