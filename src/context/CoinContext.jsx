import React, { createContext } from 'react'
import Usefetch from '../customhooks/Usefetch';

export const CoinContext = createContext();

const CoinContextProvider = ({children}) => {

  const {allcoin, setCurrency} = Usefetch();  

  const coinValue = {
    allcoin, setCurrency
  }

  return (
    <CoinContext.Provider value={coinValue}>
        {children}
    </CoinContext.Provider>
  )
}

export default CoinContextProvider