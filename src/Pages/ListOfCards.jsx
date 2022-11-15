import styles from './ListOfCards.module.css'
import Card from '../components/Card'
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react'
import Modal from '../components/Modal/Modal';
import DataContext from '../context/DataContext';
import { actionTypes } from '../context/reducer'
import BasketContext, { useStateValue } from '../context/BasketContext'

const ListOfCards = (props) => {

  
  //Estadi para setear on u off el spinner mientras se carga la data
  const [spinner, setSpinner] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  //Contexto para habilitar el modal y setear productos
  const {modalOpen,setProducts, setFilterProducts, filterProducts, setProductId} = useContext(DataContext)
  
  const navigate = useNavigate()

  const [ {favorites}, dispatch] = useStateValue()

  //Efecto donde por medio de una promise realizo el llamado al "servidor"
  /* useEffect(() => {
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
  }, []) */


  //Llamada a un servidor externo usando una async function.
  useEffect(() => {
    setSpinner(true)
    const controller = new AbortController()
    const { signal } = controller
    const getData = async () =>{
      
      try{
        const resp = await fetch("https://636276ef37f2167d6f65171a.mockapi.io/datazapa", {signal})
        const data = await resp.json()
      
        setProducts(data[0].results)
        setFilterProducts(data[0].results)
        setSpinner(false)
      }
      catch(err) {
        if (err.name !== 'AbortError') {
        console.error(err.message)
        }
      }
    }
    
    getData()
    return () => controller.abort()
  }, [setProducts, setFilterProducts])
  
  

  const handleDetail = (item) => {
    setProductId(item.id)
    navigate(`/detailspage/${item.id}`);
}

  
 /*  const prueba = (item) => {  
    const favorite = favorites.some(favoriteItem => favoriteItem.id === item.id)
    console.log(favorite)
    setIsFavorite(favorite)
    
    
  } */
  
  return(
    <>
    
    <div className={styles.containerList}>
      
      <aside className={styles.filters}>
      </aside>
      <div className={styles.listCards}>
        
        {
          spinner
            ?<Spinner/>
            :filterProducts.length > 0
              ?filterProducts.map((product)=>{
                const {id} = product
                const isFavorite = favorites?.some(favoriteItem => favoriteItem.id === id)
                
                return(
                  <Card                  
                    key = {id} 
                    
                    isFavorite = {isFavorite}
                    item = {product}
                    goToDetails={handleDetail}
                  />
                )
              })
              :<h2>No Hay productos con la marca buscada</h2>
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

