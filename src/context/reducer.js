export const initialState = {
  basket: [],
  favorites: []
}

export const actionTypes = {
  ADD_TO_BASKET: 'ADD_TO_BASKET',
  ADD_TO_FAVORITES: 'ADD_TO_FAVORITES'
}

const reducer = (state= initialState(), action={}) => {
  console.log(action)
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
      
  
    default: return state
      
  }
}

export default reducer