
import { useContext } from "react";
import CardDetails from "../components/CardDetails";
import DataContext from "../context/DataContext";
import styles from './DetailsPages.module.css'

const DetailsPages = () => {
    
    const {products, productId} = useContext(DataContext)
    const product = products.find(productItem => productItem.id === productId)
    
    
    return (
        <div className={styles.container}>
            <CardDetails item={product} />
        </div>
    )
}

export default DetailsPages;