import React, { useContext, useState } from 'react'
import { HiChevronDown, HiMagnifyingGlass } from 'react-icons/hi2'
import { CoinContext } from '../context/CoinContext';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/Components/ui/dropdown-menu"

const Hero = () => {
  const [value, setValue] = useState('');
  const { setsearchVal, allcoin } = useContext(CoinContext)

  function clickHandler(e) {
    e.preventDefault()
    setsearchVal(value);
    setValue('');
  }

  function ddbtn(ddvalue) {
    setsearchVal(ddvalue)
  }

  return (
    <section className="relative min-h-[80vh] md:min-h-[88vh] w-full bg-cover bg-center flex items-center justify-center px-4 sm:px-6 py-12 md:py-20" style={{ backgroundImage: "url('/imgs/hero.jpg')" }}>
      {/* Overlay to ensure high contrast */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

      <div className='relative z-10 w-full max-w-3xl flex flex-col justify-center items-center gap-8 md:gap-12'>
        <div className='flex flex-col items-center gap-3 sm:gap-4'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-semibold text-center tracking-tight leading-tight sm:leading-tight'>
            Find Real-Time <span className="italic font-light text-purple-300">Crypto</span> Prices
          </h1>
          <h2 className='text-sm sm:text-base md:text-lg max-w-xl text-center text-gray-300 font-light px-2'>
            Get real-time cryptocurrency prices, interactive charts, and market insights—all in one place simply.
          </h2>
        </div>

        <form onSubmit={clickHandler} className='w-full max-w-md sm:max-w-xl bg-[#1b1b1b]/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-gray-700/80 shadow-2xl flex flex-col gap-4 sm:gap-6'>
          <div className="flex items-center gap-2 border-b border-gray-700/60 pb-2">
            <HiMagnifyingGlass className="text-gray-400 text-lg flex-shrink-0" />
            <input
              className='w-full bg-transparent text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none caret-purple-400'
              type="text"
              placeholder='Type crypto to see price (e.g. Bitcoin)...'
              value={value}
              onChange={(d) => setValue(d.target.value)}
            />
          </div>

          <div className='flex justify-between items-center pt-1'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button type="button" className='text-xs sm:text-sm text-gray-300 hover:text-white flex items-center gap-1.5 focus:outline-none cursor-pointer py-1 px-2 rounded-lg hover:bg-white/5 transition-colors'>
                  All Coins <HiChevronDown size={14} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1b1b1b] border-gray-700 max-h-60 overflow-y-auto">
                {allcoin.map((data, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => ddbtn(data.name)}
                    className="cursor-pointer text-gray-200 hover:bg-white/10"
                  >
                    {data.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              type="submit"
              className='bg-purple-600 hover:bg-purple-500 text-white font-medium px-4 py-1.5 rounded-xl text-xs sm:text-sm transition-colors cursor-pointer shadow-md'
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Hero