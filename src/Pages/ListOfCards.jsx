import styles from './ListOfCards.module.css'
import Card from '../components/Card'
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react'
import Modal from '../components/Modal/Modal';
import DataContext from '../context/DataContext';

import  { useStateValue } from '../context/BasketContext'
import imgshow5 from '../imagenes/imgshow5.jpg'
import { getFirestore, collection, getDocs} from 'firebase/firestore'


const ListOfCards = () => {

  
  //Estadi para setear on u off el spinner mientras se carga la data
  const [spinner, setSpinner] = useState(false)
  //Categorias de firebase
  
  //Contexto para habilitar el modal y setear productos
  const {modalOpen,setProducts, setAllCategories, setFilterProducts, filterProducts, setProductId, filterGender, setFilterGender} = useContext(DataContext)
  
  const navigate = useNavigate()

  const [ {favorites}] = useStateValue()

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
    
    const db = getFirestore()
    const getProductsCollection = collection(db, 'productos')
    const getCategoriesCollection = collection(db, 'categories')

      const getDataFiresbase = async () => {
        try{
          const resp = await getDocs(getProductsCollection, {signal})
          const data = await resp.docs.map((doc)=>({id: doc.id, ...doc.data()}))
          const resp2 = await getDocs(getCategoriesCollection, {signal})
          const data2 = await resp2.docs.map((doc)=>({id: doc.id, ...doc.data()}))


          setProducts(data)
          setAllCategories(data2)
          setFilterProducts(data)
          
        }
        catch(err) {
          if (err.name !== 'AbortError') {
          console.error(err.message)
          }
        }
        setSpinner(false)
      }
    getDataFiresbase()
    return () => controller.abort()
    
  }, [setProducts, setFilterProducts])
  
  

  const handleDetail = (item) => {
    setProductId(item.id)
    navigate(`/detailspage/${item.id}`);
}

  

  
  return(
    <>
    
    <div className={styles.containerList}>
    
      <aside className={styles.imgshows}>
        <img src={imgshow5} alt="" />
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
              :<div className={styles.noProductTitle}>
                <h2>No hay productos con la marca o género buscado</h2>
              </div>
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

