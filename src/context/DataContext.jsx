import { useState, createContext } from "react";

const DataContext = createContext({});

const DataProvider = ({children}) => {

  const [infoModal, setInfoModal] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [infoModalBuy, setInfoModalBuy] = useState(null)
  const [modalOpenBuy, setModalOpenBuy] = useState(false)
  const [isActiveImgModal, setIsActiveImgModal] = useState(true)
  const [number, setNumber] = useState(1)
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])
  const [isActiveFavorites, setIsActiveFavorites] = useState(false)
  const [productId, setProductId] = useState(null)
  const [fav, setFav] = useState(false)
  const [filterGender, setFilterGender] = useState([])
  const [allCategories, setAllCategories] = useState([])

  const result= {
    products, setProducts,
    allCategories, setAllCategories,
    filterGender, setFilterGender, 
    fav, setFav, 
    filterProducts, setFilterProducts, 
    infoModal, setInfoModal,
    modalOpen, setModalOpen,
    infoModalBuy, setInfoModalBuy,
    modalOpenBuy, setModalOpenBuy,
    isActiveImgModal, setIsActiveImgModal, 
    number, setNumber,
    isActiveFavorites, setIsActiveFavorites,
    productId, setProductId}


  return(
    <DataContext.Provider value={result}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
export {DataProvider}
