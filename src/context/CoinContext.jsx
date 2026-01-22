import React, { createContext, useState } from 'react'
import Usefetch from '../customhooks/Usefetch';

export const CoinContext = createContext();

const CoinContextProvider = ({children}) => {

  const {allcoin, currency, setCurrency} = Usefetch();  
  const [searchVal, setsearchVal] = useState('')

  const coinValue = {
    allcoin, setCurrency, currency, searchVal, setsearchVal
  }

  return (
    <CoinContext.Provider value={coinValue}>
        {children}
    </CoinContext.Provider>
  )
}

export default CoinContextProvider