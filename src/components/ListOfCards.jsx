import './ListOfCards.css'
import Card from './Card'

const cards = [
  {
    id : 1,
    mark : 'Nike',
    description : 'Calzado de running en carretera para hombre Downshifter 11',
    price : '18.500'
  },
  {
    id : 2,
    mark : 'Nike',
    description : 'Calzado de running en carretera para hombre Downshifter 11',
    price : '18.500'
  },
  {
    id : 3,
    mark : 'Nike',
    description : 'Calzado de running en carretera para hombre Downshifter 11',
    price : '18.500'
  },
  {
    id : 4,
    mark : 'Nike',
    description : 'Calzado de running en carretera para hombre Downshifter 11',
    price : '18.500'
  },
  {
    id : 5,
    mark : 'Nike',
    description : 'Calzado de running en carretera para hombre Downshifter 11',
    price : '18.500'
  },
  {
    id : 6,
    mark : 'Adidas',
    description : 'Adidas el mejor calzado deportivo modelo FutbolZero para tu amigo el "mago"',
    price : '24.900'
  }
]

const ListOfCards = () => {
  return(
    <div className="containerList">
      <aside className="filters">

      </aside>
      <div className="listCards">
        {
          cards.map((card, index)=>{
            const {id, mark, description, price} = card
            return(
              <Card
                key = {index} 
                id = {id}
                mark = {mark}
                description = {description}
                price = {price}
              />
            )
          })
        }
        
      </div>
      
    </div>
  )
}

export default ListOfCards

