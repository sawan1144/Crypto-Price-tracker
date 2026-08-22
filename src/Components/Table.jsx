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
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
      <div className="rounded-2xl border border-gray-800 bg-[#101010] shadow-xl overflow-hidden">
        {/* Table scroll container for mobile screens */}
        <div className="overflow-x-auto">
          <div className="min-w-[620px]">
            {/* Table Header */}
            <div className='grid grid-cols-[0.4fr_2fr_1fr_1fr_1.4fr] px-5 py-4 border-b border-gray-800 text-xs sm:text-sm font-medium text-gray-400'>
              <div>#</div>
              <div>Coin</div>
              <div>Price</div>
              <div className="text-center">24h Change</div>
              <div className='text-right'>Market Cap</div>
            </div>

            {/* Table Body */}
            {loading ? (
              <div className="py-12 flex justify-center items-center">
                <Loader />
              </div>
            ) : toShow.length === 0 ? (
              <div className="py-12 text-center text-gray-400 text-sm">
                No cryptocurrencies found matching "{searchVal}".
              </div>
            ) : (
              toShow.map((data, index) => (
                <Link
                  to={`/coin/${data.id}`}
                  key={index}
                  className='grid grid-cols-[0.4fr_2fr_1fr_1fr_1.4fr] px-5 py-4 border-b border-gray-850 hover:bg-white/[0.04] transition-colors items-center text-xs sm:text-sm'
                >
                  <div className="text-gray-400 font-mono">{data.market_cap_rank}</div>
                  <div className="flex items-center gap-3 pr-2">
                    <img src={data.image} alt={data.name} className="h-6 w-6 sm:h-7 sm:w-7 rounded-full flex-shrink-0" />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1.5 truncate">
                      <span className="font-semibold text-white truncate">{data.name}</span>
                      <span className="text-gray-400 text-[11px] sm:text-xs uppercase">{data.symbol}</span>
                    </div>
                  </div>
                  <div className="font-semibold text-gray-100">
                    {currency.symbol} {data.current_price?.toLocaleString()}
                  </div>

                  <div className={`text-center font-medium ${data.price_change_percentage_24h >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                    {data.price_change_percentage_24h !== undefined && data.price_change_percentage_24h !== null
                      ? `${data.price_change_percentage_24h > 0 ? '+' : ''}${data.price_change_percentage_24h.toFixed(2)}%`
                      : "N/A"}
                  </div>

                  <div className='text-right font-medium text-gray-300'>
                    {currency.symbol} {data.market_cap?.toLocaleString()}
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Table