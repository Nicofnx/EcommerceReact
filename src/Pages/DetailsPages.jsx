
import { useParams, useLocation } from "react-router-dom";
import CardDetails from "../components/CardDetails";
import styles from './DetailsPages.module.css'

const DetailsPages = () => {
    const params = useParams();
    const { state } = useLocation();

   

    console.warn('params', params, 'state', state);
    return (
        <div className={styles.container}>
            <CardDetails item={state} />
        </div>
    )
}

export default DetailsPages;