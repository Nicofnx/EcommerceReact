import styles from './Modal.module.css'

const BtnSelectImg = (props) => {

  const handleOnClick = ({e, id}) => {
    if(props.onClick){
      props.onClick({e, id})
    }
  }
  return(
    <div key={props.btnId} id={props.btnId} onClick={(e)=>{handleOnClick({e, id:props.btnId})}} className={props.stateOn ? styles.isActive : styles.selector}> </div>
  )
}

export default BtnSelectImg