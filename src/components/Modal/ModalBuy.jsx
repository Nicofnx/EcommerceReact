
import styles from './ModalBuy.module.css'
import { useContext } from 'react'
import DataContext from '../../context/DataContext'




const ModalBuy = () => {

  
  const {infoModalBuy, setModalOpenBuy} = useContext(DataContext)
  const {nameUser, mailUser} = infoModalBuy
  
  
  const closeModal=()=>{
    setModalOpenBuy(false)
  }


  

  return (
    <div className={styles.overlay}>
      <div  className={styles.container}>
        <div onClick={closeModal} className={styles.btnclosed}>X</div>
        <p>{nameUser} Gracias por su compra</p>
        <p>Recibira un correo a {mailUser} con los detalles del envio</p>
        
        
        
      </div>
    </div>
    
  )
}

export default ModalBuy