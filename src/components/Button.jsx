import styles from './Styles/Button.module.css'

const Button = (props) => {

  const {children, mystyle, onClick, state= true} = props
  



  return(
    <button onClick={onClick} disabled={!state} className={state  ?styles[mystyle] :styles.disable}>{children}</button>
  )
}

export default Button