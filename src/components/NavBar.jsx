import "./NavBar.css"

const NavBar = () => {

  const menuItems = ["Categorias", "Hombre", "Mujer", "Infantil", "Marcas", "Liquidacion"]

  return(
    <div>
      <ul className="navUl">
        {
          menuItems.map((item, index) =>{
            return(
              <li className="navLi" key={index} >{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default NavBar