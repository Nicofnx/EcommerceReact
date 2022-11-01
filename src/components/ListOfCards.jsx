import styles from './ListOfCards.module.css'
import Card from './Card'
import Spinner from './Spinner';
import productsData from '../products-data';
import { useEffect, useState, useContext } from 'react'
import Modal from './Modal';
import DataContext from '../context/DataContext';

const ListOfCards = (props) => {

  //Estado donde almaceno los productos para las cards
  const [products, setProducts] = useState([])

  //Estadi para setear on u off el spinner mientras se carga la data
  const [spinner, setSpinner] = useState(false)

  //Contexto para habilitar el modal
  const {modalOpen} = useContext(DataContext)


  //Efecto donde por medio de una promise realizo el llamado al "servidor"
  useEffect(() => {
    setSpinner(true)
    const product = new Promise((resolve, reject)=>{
      //Uso un setTime para simular la demora de la respuesta
      setTimeout(() => {
        resolve(productsData)
        
      }, 2000);
     
    });
    //.then para pasar la promesa al array en la variable results y luego setear el estado
    product.then((results)=>{
      setProducts(results)
      setSpinner(false)
    },
    //Atrapamos el error que pueda existir en la llamada (en este caso no hay forma de que falle)
    err=>{console.log('Error ' + err)
    }).catch(err=>{ console.log('Error: No se pudo acceder a la base de datos')})
  }, [productsData])


  const {greeting} = props




  return(
    <>
    <h1>{ greeting }</h1>
    <div className={styles.containerList}>
      
      <aside className={styles.filters}>
      </aside>
      <div className={styles.listCards}>
        
        {
          spinner
            ?<Spinner/>
            :products.map((result)=>{
              const {id} = result
              return(
                <Card                  
                  key = {id} 
                  product = {result}
                />
              )
            })
        }
        
        
      </div>
      {modalOpen &&
        <Modal />
      }
      
    </div>
    </>
    
  )
}

export default ListOfCards

