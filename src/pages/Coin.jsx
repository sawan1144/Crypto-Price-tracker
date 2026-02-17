import Chart from '@/Components/Chart';
import Loader from '@/Components/Loader';
import { CoinContext } from '@/context/CoinContext';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'

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
    <div className='min-h-[91vh] py-[10vh] px-[20vw] flex flex-col justify-center items-center'>
      {loading || !coindata ? <Loader className='animate-spin' size={40} /> :
        <>
          <div className='flex items-center gap-8'>
            <img className='h-25' src={coindata.image.large} />
            <h1 className='text-5xl'>{coindata.name} ({coindata.symbol.toUpperCase()})</h1>
          </div>

          <Chart data={chartdata} />

          <div className='w-full space-y-5'>
            <h1 className='text-2xl font-bold mt-10'>Overview</h1>
            <div className='space-y-4'>
              <div className='flex justify-between border-b border-gray-500'>
                <p>Crypto Market Rank</p>
                <p>{coindata.market_cap_rank}</p>
              </div>
              <div className='flex justify-between border-b border-gray-500'>
                <p>Current Price</p>
                <p>{currency.symbol} {coindata.market_data.current_price[currency.name].toLocaleString()}</p>
              </div>
              <div className='flex justify-between border-b border-gray-500'>
                <p>Market Cap</p>
                <p>{currency.symbol} {coindata.market_data.market_cap[currency.name].toLocaleString()}</p>
              </div>
              <div className='flex justify-between border-b border-gray-500'>
                <p>24h Change</p>
                <p>{coindata.market_data.price_change_24h_in_currency[currency.name]?.toFixed(2) ?? "N/A"}</p>
              </div>
              <div className='flex justify-between border-b border-gray-500'>
                <p>Total Supply</p>
                <p>{coindata.market_data.total_supply?.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default Coin