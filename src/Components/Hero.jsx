import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi2'

const Hero = () => {
  const [value, setValue] = useState('')

  return (
    <div className="h-[89vh] w-full bg-cover bg-center" style={{ backgroundImage: "url('/imgs/hero.jpg')" }}>
      <div className='h-full flex flex-col justify-center items-center gap-15'>
        <div className='flex flex-col items-center gap-4'>
          <h1 className='text-[4rem] font-medium text-center'>Find Real-Time <span className="italic font-light">Crypto</span> Prices</h1>
          <h2 className='text-lg w-[30vw] text-center'>Get real-time cryptocurrency prices, interactive charts, and market insights—all in one place simply.</h2>
        </div>
        <form className='bg-[#1b1b1b] p-4 rounded-lg border border-gray-500 flex flex-col gap-8' action="">
          <input className='w-[40vw] focus:outline-none caret-gray-400' type="text" placeholder='Type crypto to see price...' 
          value={value} onChange={(d)=>setValue(d.target.value)}/>
          <div className='flex justify-between items-center'>
            <div className='text-sm flex items-center gap-1'>All Coins <HiChevronDown /></div>
            <button className='bg-gray-500 px-2 py-1 rounded-lg text-gray-300'>Search</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Hero