import styles from './Styles/CheckOut.module.css'
import accounting from 'accounting'
import CardCheckOut from '../components/CardCheckOut'
import Button from '../components/Button'
import ModalBuy from '../components/Modal/ModalBuy'
import { useLocation } from 'react-router-dom'
import { actionTypes } from '../context/reducer'
import { useStateValue } from '../context/BasketContext'
import { useState, useEffect, useContext } from 'react'
import { getFirestore, collection, addDoc } from "firebase/firestore";
import DataContext from '../context/DataContext';

const CheckOut = () => {

  const params = useLocation()
  const {modalOpenBuy, setInfoModalBuy, setModalOpenBuy} = useContext(DataContext)
  const [ {basket}, dispatch ] = useStateValue()
  const [addPrice, setAddPrice] = useState(0)
  const [nameUser, setNameUser] = useState('')
  const [mailUser, setMailUser] = useState('')
  const [isFormComplete, setIsFormComplete] = useState(false)

  useEffect(() => {
    let sumaPrice = 0
    for (let index = 0; index < basket.length; index++) {
      sumaPrice = sumaPrice + parseInt(basket[index].price)*basket[index].number
      setAddPrice(sumaPrice)
    }
    if(basket.length === 0) setAddPrice(0)
    
    
  }, [basket])


  const handleName = (e) =>{
    setNameUser(e.target.value)
  }
  
  const handleEmail = (e) =>{
    setMailUser(e.target.value)
  }

  useEffect(()=>{
    if(nameUser !== ''&& mailUser !== '' && basket.length>0){
       setIsFormComplete(true)
      }else{
        setIsFormComplete(false)
      }
  },[nameUser,mailUser,isFormComplete, basket])
  
 

  const finishBuy = (nameUser, mailUser) => {
    const myOrder = {
      user: {
        name: nameUser,
        email: mailUser
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
        setInfoModalBuy({nameUser, mailUser})
        setModalOpenBuy(true)
        setAddPrice(0)
        
        
      })
      setNameUser('')
      setMailUser('')
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
        <div className={styles.containerInputs}>
          <label for="name">Nombre:</label>
          <input 
            type="text" 
            id="name" 
            placeholder='Indique su nombre' 
            name="user_name"
            onChange={handleName}
            
          />
          <label for="mail">Correo electrónico:</label>
          <input 
            type="email" 
            id="mail" 
            placeholder='Indique su correo' 
            name="user_mail"
            onChange={handleEmail}
            
          />
        </div>
        <p>Total de la compra: 
          <span>
            {accounting.formatMoney(addPrice,"$" ,0, ".")}
          </span> 
        </p>
        <Button
          state = {isFormComplete ? true : false}
          mystyle = 'btnBuy'
          onClick = {()=>finishBuy(nameUser,mailUser)}
        >
          Finalizar compra
        </Button>
      </div>
      {modalOpenBuy &&
        <ModalBuy />
      }
    </div>
  )
}

export default CheckOut