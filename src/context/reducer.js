let favoritesInLocal = JSON.parse(localStorage.getItem('favorites'))

export const initialState = {
  basket: [],
  favorites: favoritesInLocal
}

export const actionTypes = {
  ADD_TO_BASKET: 'ADD_TO_BASKET',
  ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
  DElETE_TO_BASKET: 'DELETE_TO_BASKET',
  DElETE_TO_FAVORITES: 'DELETE_TO_FAVORITES',
  FINISH_BUY: 'FINISH_BUY'
}

const reducer = (state= initialState(), action={}) => {
  
  switch (action.type) {
    case 'ADD_TO_BASKET':
      
      return{
        ...state,
        basket: [...state.basket, action.item]
        }


    case 'ADD_TO_FAVORITES':
      return{
        ...state,
        favorites: [...state.favorites, action.item]
        
        }


    case 'DELETE_TO_BASKET':
      const filteredBasket = state.basket.filter(basketItem => basketItem.idSize !== action.idSize)
      let newBasket = filteredBasket
      console.log(filteredBasket)

      
      
      return{
        ...state,
        basket: newBasket
        }


    case 'DELETE_TO_FAVORITES':      
      const indexFavorite = state.favorites.findIndex(favoriteItem=>favoriteItem.id === action.id)
      let newFavorite = [...state.favorites]
       
      indexFavorite >= 0
        ? newFavorite.splice(indexFavorite, 1)
        : console.log('Error al eliminar el elemento')
      return{
        ...state,
        favorites: newFavorite
        }
    
    case 'FINISH_BUY':
      return{
        ...state,
        basket: []
      }
  
    default: return state
      
  }
}

export default reducer