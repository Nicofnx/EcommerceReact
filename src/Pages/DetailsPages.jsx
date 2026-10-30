
import { useContext } from "react";
import CardDetails from "../components/CardDetails";
import DataContext from "../context/DataContext";
import styles from './Styles/DetailsPages.module.css'
import Modal from "../components/Modal/Modal";
import { useParams } from "react-router-dom";

const DetailsPages = () => {
    
    const {products, productId, modalOpen} = useContext(DataContext)
    const { detailsId } = useParams()
    const selectedId = productId ?? detailsId
    const product = products.find(productItem => String(productItem.id) === String(selectedId))
    
    
    
    if (!product) {
      return <div className={styles.container}>Producto no encontrado.</div>
    }

    return (
        <div className={styles.container}>
            <CardDetails 
                item={product}
                 />
             {modalOpen &&
            <Modal />
      }
        </div>
    )
}

export default DetailsPages;
