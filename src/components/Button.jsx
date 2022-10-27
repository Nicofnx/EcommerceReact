import styles from './Button.module.css'

const Button = (props) => {

  const {children, mystyle, onClick} = props
  

  return(
    <button onClick={onClick} className={styles[mystyle]}>{children}</button>
  )
}

export default Button