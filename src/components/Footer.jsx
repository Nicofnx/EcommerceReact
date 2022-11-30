import styles from './Styles/Footer.module.css'
import FeatherIcon from 'feather-icons-react'
import { Link } from "react-router-dom";

const Footer = () =>{
  return(
    <div className={styles.container}>
      <h4>Proyecto realizado por
        <div className={styles.waviy}>
          <span >N</span>
          <span >i</span>
          <span >c</span>
          <span >o</span>
          <span >F</span>
          <span >n</span>
          <span >X</span>
          

    </div>
      </h4>
      <div className={styles.containerLogos}>
        <a 
        href='https://www.linkedin.com/in/nicolas-rodriguez-fnx/'
        target='_blank'>
          <FeatherIcon className={styles.logo} size="36" icon="linkedin" />
        </a>
        <a 
        href='https://github.com/Nicofnx/'
        target='_blank'>
          <FeatherIcon className={styles.logo} size="36" icon="github" />
        </a>
      </div>
    </div>
  )
}

export default Footer