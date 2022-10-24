import styles from "./NavBar.module.css"

const NavBar = () => {

  const menuItems = ["Categorias", "Hombre", "Mujer", "Infantil", "Marcas", "Liquidacion"]

  return(
    <div>
      <ul className={styles.navUl}>
        {
          menuItems.map((item, index) =>{
            return(
              <li className={styles.navLi} key={index} >{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default NavBar