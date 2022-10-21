import './Button.css'

const Button = (props) => {

  const {children, mystyle, onClick} = props
  

  return(
    <button onClick={onClick} className={mystyle}>{children}</button>
  )
}

export default Button