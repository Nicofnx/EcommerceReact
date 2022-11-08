
import { useParams, useLocation } from "react-router-dom";
import CardDetails from "../CardDetails";
import styles from './DetailsPages.module.css'

const DetailsPages = () => {
    const params = useParams();
    const { state } = useLocation();

    console.log(state)

    console.warn('params', params, 'state', state);
    return (
        <div className={styles.container}>
            <CardDetails item={state} />
        </div>
    )
}

export default DetailsPages;