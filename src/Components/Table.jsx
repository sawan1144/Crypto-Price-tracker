import { useContext, useEffect, useState } from "react"
import { CoinContext } from "../context/CoinContext"
import { Link } from "react-router-dom"
import Loader from "./Loader";

const Table = () => {
  const { allcoin, currency, searchVal, loading } = useContext(CoinContext);
  const [displayCoin, setdisplayCoin] = useState([])

  useEffect(() => {
    setdisplayCoin(allcoin);
  }, [allcoin])

  const searchedCoin = displayCoin.filter((item) => item.name.toLowerCase().includes(searchVal.toLowerCase()));
  const toShow = searchVal ? searchedCoin : displayCoin.slice(0, 10);

  return (
    <div className='px-60 pt-10 pb-15'>
      <div className=" rounded-xl border border-gray-600 bg-[#101010]">
        <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] p-5 pb-8 rounded-xl text-sm text-gray-400'>
          <div>#</div>
          <div>Coin</div>
          <div>Price</div>
          <div className="text-center">24h Change</div>
          <div className='text-right'>Market Cap</div>
        </div>
        {loading ? <Loader /> :
          toShow.map((data, index) => (
            <Link to={`/coin/${data.id}`} key={index} className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] p-5 rounded-xl items-center'>
              <div>{data.market_cap_rank}</div>
              <div className="flex items-center gap-2"><img src={data.image} className="h-8" /><p>{data.name + " - " + data.symbol}</p></div>
              <div className="font-semibold">{currency.symbol + " " + data.current_price.toLocaleString()}</div>

              <div className={`text-center ${data.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"}`}>
                {data.price_change_percentage_24h.toFixed(2)}% </div>

              <div className='text-right'>{currency.symbol + " " + data.market_cap.toLocaleString()}</div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Table