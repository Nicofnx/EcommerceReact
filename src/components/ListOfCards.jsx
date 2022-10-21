import './ListOfCards.css'
import Card from './Card'

const ListOfCards = () => {
  return(
    <div className="containerList">
      <aside className="filters">

      </aside>
      <div className="listCards">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
      
    </div>
  )
}

export default ListOfCards