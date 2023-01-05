import styles from './Styles/ListOfCards.module.css'
import Card from '../components/Card'
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext, lazy, Suspense } from 'react'
//import Modal from '../components/Modal/Modal';
import DataContext from '../context/DataContext';
import  { useStateValue } from '../context/BasketContext'
import { getFirestore, collection} from 'firebase/firestore'
import { getDataFromFirebase } from '../services/getDataFirebase';
import Carrousel from '../components/Carrousel';

const Modal = lazy(() => import('../components/Modal/Modal'))


const ListOfCards = () => {

  
  //Estadi para setear on u off el spinner mientras se carga la data
  const [spinner, setSpinner] = useState(false)
  //Categorias de firebase
  
  //Contexto para habilitar el modal y setear productos
  const {modalOpen,setProducts,products, setAllCategories, setFilterProducts, filterProducts, setProductId, filterGender, setFilterGender} = useContext(DataContext)
  
  const navigate = useNavigate()

  const [ {favorites}] = useStateValue()



  //Llamada a un servidor externo usando una async function.
  useEffect(() => {  
    setSpinner(true)
    
    const db = getFirestore()
    const getProductsCollection = collection(db, 'productos')
    const getCategoriesCollection = collection(db, 'categories')

    
    getDataFromFirebase(getProductsCollection)
    .then((getProducts)=>{
      setProducts(getProducts)
    setFilterProducts(getProducts)
    })
    
    
    getDataFromFirebase(getCategoriesCollection)
    .then((getCategories)=>{
      setAllCategories(getCategories)
    })
    
    

    setSpinner(false)
  }, [setProducts, setFilterProducts])
  
  

  const handleDetail = (item) => {
    setProductId(item.id)
    navigate(`/detailspage/${item.id}`);
}

  

  
  return(
    <>
    
    <div className={styles.containerList}>
    
      <aside className={styles.imgshows}>
        <Carrousel />
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
      <Suspense fallback={<div>Cargando modal...</div>}>
        {modalOpen &&
          <Modal />
        }
      </Suspense>
     
      
    </div>
    </>
    
  )
}

export default ListOfCards

