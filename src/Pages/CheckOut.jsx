import styles from './Styles/CheckOut.module.css'
import accounting from 'accounting'
import CardCheckOut from '../components/CardCheckOut'
import Button from '../components/Button'
import { useLocation } from 'react-router-dom'
import { actionTypes } from '../context/reducer'
import { useStateValue } from '../context/BasketContext'
import { useState, useEffect } from 'react'
import { getFirestore, collection, addDoc } from "firebase/firestore";

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
    const myOrder = {
      user: {
        name: 'Nicolas Rodriguez',
        email: 'nicolasarielrodriguez@gmail.com'
      },
      items: basket,
      total: addPrice,
    }
    const db = getFirestore();
    const orderCollection = collection(db, 'orders');
    addDoc(orderCollection, myOrder)
      .then(() => {
        
        dispatch({
          type: actionTypes.FINISH_BUY,      
        })
        setAddPrice(0)
        alert('Compra Finalizada, recibira un mail')
        
      })
  };

  


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
          state = {basket.length===0 ? false : true}
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