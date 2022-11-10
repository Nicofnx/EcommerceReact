import { useContext, createContext, useReducer } from "react";


const BasketContext = createContext();

export const BasketProvider = ({reducer, initialState, children}) => {


  return(
    <BasketContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketContext
export const useStateValue = () => useContext(BasketContext)