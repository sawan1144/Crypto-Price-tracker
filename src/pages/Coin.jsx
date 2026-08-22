import Chart from '@/Components/Chart';
import Loader from '@/Components/Loader';
import { CoinContext } from '@/context/CoinContext';
import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi2';

const Coin = () => {
  const [coindata, setCoindata] = useState()
  const [chartdata, setChartdata] = useState()
  const { coinId } = useParams();
  const [loading, setloading] = useState(false)
  const { currency } = useContext(CoinContext)

  useEffect(() => {
    const options = { method: 'GET', headers: { 'x-cg-demo-api-key': 'CG-iTf14Dm7pF7ZcpkM5qQAEnUr' } };
    setloading(true)
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`, options)
      .then(raw => { if (!raw.ok) { throw new Error(`Error found: ${raw.status}`) } return raw.json() })
      .then(res => setCoindata(res))
      .catch(err => console.error(err))
      .finally(() => setloading(false))
  }, [currency, coinId])

  useEffect(() => {
    const options = { method: 'GET', headers: { 'x-cg-demo-api-key': 'CG-iTf14Dm7pF7ZcpkM5qQAEnUr' } };
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=30&precision=0`, options)
      .then(raw => { if (!raw.ok) { throw new Error(`Error found: ${raw.status}`) } return raw.json() })
      .then(res => setChartdata(res))
      .catch(err => console.error(err))
  }, [currency, coinId])

  return (
    <div className='min-h-[85vh] py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col justify-center items-center w-full'>
      {loading || !coindata ? (
        <div className="py-20 flex justify-center items-center">
          <Loader size={40} />
        </div>
      ) : (
        <div className='w-full'>
          {/* Back button */}
          <Link
            to="/"
            className='inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-400 hover:text-white mb-6 transition-colors cursor-pointer'
          >
            <HiArrowLeft /> Back to all coins
          </Link>

          {/* Coin Title & Logo Header */}
          <div className='flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 text-center sm:text-left mb-6'>
            <img className='h-16 w-16 sm:h-20 sm:w-20 object-contain' src={coindata.image.large} alt={coindata.name} />
            <div>
              <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white'>
                {coindata.name} <span className="text-gray-400 text-lg sm:text-2xl uppercase">({coindata.symbol})</span>
              </h1>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">Rank #{coindata.market_cap_rank}</p>
            </div>
          </div>

          {/* Chart Component */}
          <Chart data={chartdata} />

          {/* Market Overview Card */}
          <div className='w-full bg-[#101010] border border-gray-800 rounded-2xl p-5 sm:p-7 space-y-4 shadow-xl mt-6'>
            <h2 className='text-lg sm:text-xl font-bold text-white mb-3'>Market Overview</h2>
            <div className='divide-y divide-gray-800/80 text-xs sm:text-sm'>
              <div className='flex justify-between items-center py-3'>
                <span className='text-gray-400'>Crypto Market Rank</span>
                <span className='font-semibold text-white'>#{coindata.market_cap_rank}</span>
              </div>
              <div className='flex justify-between items-center py-3'>
                <span className='text-gray-400'>Current Price</span>
                <span className='font-semibold text-white'>
                  {currency.symbol} {coindata.market_data.current_price[currency.name]?.toLocaleString()}
                </span>
              </div>
              <div className='flex justify-between items-center py-3'>
                <span className='text-gray-400'>Market Cap</span>
                <span className='font-semibold text-white'>
                  {currency.symbol} {coindata.market_data.market_cap[currency.name]?.toLocaleString()}
                </span>
              </div>
              <div className='flex justify-between items-center py-3'>
                <span className='text-gray-400'>24h Price Change</span>
                <span className={`font-semibold ${
                  coindata.market_data.price_change_24h_in_currency[currency.name] >= 0 ? "text-emerald-400" : "text-rose-400"
                }`}>
                  {coindata.market_data.price_change_24h_in_currency[currency.name] !== undefined
                    ? `${coindata.market_data.price_change_24h_in_currency[currency.name] > 0 ? '+' : ''}${currency.symbol}${coindata.market_data.price_change_24h_in_currency[currency.name]?.toFixed(2)}`
                    : "N/A"}
                </span>
              </div>
              <div className='flex justify-between items-center py-3'>
                <span className='text-gray-400'>Total Supply</span>
                <span className='font-semibold text-white'>
                  {coindata.market_data.total_supply ? coindata.market_data.total_supply.toLocaleString() : "Unlimited / N/A"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Coin