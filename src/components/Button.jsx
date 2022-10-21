import './Button.css'

const Button = (props) => {

  const {children, style} = props
  

  return(
    <button className={style}>{children}</button>
  )
}

export default Button