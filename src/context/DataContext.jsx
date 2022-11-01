import { useState, useEffect, useMemo, createContext } from "react";

const DataContext = createContext({});

const DataProvider = ({children}) => {

  const [infoModal, setInfoModal] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  
  const result= {infoModal, setInfoModal,modalOpen, setModalOpen}


  return(
    <DataContext.Provider value={result}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
export {DataProvider}
