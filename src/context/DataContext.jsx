import { useState, createContext } from "react";

const DataContext = createContext({});

const DataProvider = ({children}) => {

  const [infoModal, setInfoModal] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [isActiveImgModal, setIsActiveImgModal] = useState(true)
  const [number, setNumber] = useState(1)
  
  const result= {infoModal, setInfoModal,modalOpen, setModalOpen, isActiveImgModal, setIsActiveImgModal, number, setNumber}


  return(
    <DataContext.Provider value={result}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
export {DataProvider}
