import React, { useContext, useState } from 'react'
import { HiArrowUpRight, HiChevronDown } from 'react-icons/hi2'
import { CoinContext } from '../context/CoinContext'
import {Link} from "react-router-dom";

const Navbar = () => {
    const [show, setShow] = useState(false)
    const [curr, setcurr] = useState('USD')
    const {setCurrency} = useContext(CoinContext)

    function clickHandler() {
        setShow((p) => !p)
    }

    function currencyHandler(c, s){
        setCurrency({name: c, symbol: s})
        setcurr(c.toUpperCase())
        setShow((p) => !p)
    }

    return (
        <div className='sticky top-0 z-50 backdrop-blur-xl bg-gray-500/25'>
            <div className='flex justify-between items-center py-4 px-25'>
                <a onClick={()=>window.location.href = "/"}><img src="/imgs/logo.png" alt="Logo" className='h-8'/></a> 
                <div className='flex gap-10 text-sm font-semibold'>
                    <Link to="/" className='cursor-pointer'>Home</Link>
                    <button className='cursor-pointer'>Features</button>
                    <button className='cursor-pointer'>Pricing</button>
                    <button className='cursor-pointer'>Blog</button>
                </div>
                <div className='flex items-center gap-8'>
                    <div>
                        <button className='flex items-center gap-1 border-2 px-2 rounded-xl' onClick={clickHandler}>{curr} <HiChevronDown /></button>
                        {show && <div className='absolute top-15 bg-white text-black py-3 rounded-lg transition ease-in duration-200'>
                            <div onClick={()=>currencyHandler('usd', '$')} className='px-3 hover:bg-gray-500 cursor-pointer'>USD</div>
                            <div onClick={()=>currencyHandler('inr', '₹')} className='px-3 hover:bg-gray-500 cursor-pointer'>INR</div>
                            <div onClick={()=>currencyHandler('eur', '€')} className='px-3 hover:bg-gray-500 cursor-pointer'>EUR</div>
                        </div>}
                    </div>
                    <div className='px-3 py-1 bg-white text-black font-bold rounded-xl text-sm flex items-center gap-1'>
                        Sign Up <HiArrowUpRight strokeWidth={1} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar