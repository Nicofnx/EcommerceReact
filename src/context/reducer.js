export const initialState = {
  basket: [],
  favorites: []
}

export const actionTypes = {
  ADD_TO_BASKET: 'ADD_TO_BASKET',
  ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
  DElETE_TO_BASKET: 'DELETE_TO_BASKET',
  DElETE_TO_FAVORITES: 'DELETE_TO_FAVORITES'
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
      const indexBasket = state.basket.findIndex(basketItem=>basketItem.id === action.id)      
      let newBasket = [...state.basket]
   
      indexBasket >= 0
        ? newBasket.splice(indexBasket, 1)
        : console.log('Error al eliminar el elemento')
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
      
  
    default: return state
      
  }
}

export default reducer