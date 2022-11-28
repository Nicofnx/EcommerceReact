
import { useContext } from "react";
import CardDetails from "../components/CardDetails";
import DataContext from "../context/DataContext";
import styles from './Styles/DetailsPages.module.css'
import Modal from "../components/Modal/Modal";

const DetailsPages = () => {
    
    const {products, productId, modalOpen} = useContext(DataContext)
    const product = products.find(productItem => productItem.id === productId)
    
    
    
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