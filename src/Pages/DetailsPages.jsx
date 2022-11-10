
import {  useLocation } from "react-router-dom";
import CardDetails from "../components/CardDetails";
import styles from './DetailsPages.module.css'

const DetailsPages = () => {
    
    const { state } = useLocation();

   

    
    return (
        <div className={styles.container}>
            <CardDetails item={state} />
        </div>
    )
}

export default DetailsPages;