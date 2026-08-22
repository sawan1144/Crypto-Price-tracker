import React, { useContext, useState } from 'react'
import { HiArrowUpRight, HiChevronDown, HiBars3, HiXMark } from 'react-icons/hi2'
import { CoinContext } from '../context/CoinContext'
import { Link } from "react-router-dom"

const Navbar = () => {
    const [show, setShow] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const [curr, setcurr] = useState('USD')
    const { setCurrency } = useContext(CoinContext)

    function clickHandler() {
        setShow((p) => !p)
    }

    function currencyHandler(c, s) {
        setCurrency({ name: c, symbol: s })
        setcurr(c.toUpperCase())
        setShow(false)
    }

    return (
        <header className='sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10'>
            <div className='max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8'>
                {/* Brand Logo */}
                <Link to="/" className='cursor-pointer flex items-center'>
                    <img src="/imgs/logo.png" alt="Logo" className='h-7 sm:h-8 object-contain' />
                </Link>

                {/* Desktop Navigation Links */}
                <nav className='hidden md:flex items-center gap-6 lg:gap-10 text-sm font-semibold text-gray-200'>
                    <Link to="/" className='hover:text-white transition-colors'>Home</Link>
                    <button className='hover:text-white transition-colors cursor-pointer'>Features</button>
                    <button className='hover:text-white transition-colors cursor-pointer'>Pricing</button>
                    <button className='hover:text-white transition-colors cursor-pointer'>Blog</button>
                </nav>

                {/* Actions (Currency & Sign Up) */}
                <div className='flex items-center gap-3 sm:gap-6'>
                    {/* Currency Selector */}
                    <div className='relative'>
                        <button
                            className='flex items-center gap-1 border border-gray-500 hover:border-gray-300 px-2.5 py-1 text-xs sm:text-sm rounded-xl transition-colors cursor-pointer'
                            onClick={clickHandler}
                            aria-label="Select Currency"
                        >
                            {curr} <HiChevronDown className={`transition-transform duration-200 ${show ? 'rotate-180' : ''}`} />
                        </button>
                        {show && (
                            <div className='absolute right-0 mt-2 w-24 bg-[#1f1f1f] border border-gray-700 text-white py-1.5 rounded-lg shadow-xl z-50 text-sm'>
                                <div onClick={() => currencyHandler('usd', '$')} className='px-3 py-1.5 hover:bg-gray-700 cursor-pointer transition-colors'>USD ($)</div>
                                <div onClick={() => currencyHandler('inr', '₹')} className='px-3 py-1.5 hover:bg-gray-700 cursor-pointer transition-colors'>INR (₹)</div>
                                <div onClick={() => currencyHandler('eur', '€')} className='px-3 py-1.5 hover:bg-gray-700 cursor-pointer transition-colors'>EUR (€)</div>
                            </div>
                        )}
                    </div>

                    {/* Sign Up Button */}
                    <button className='hidden sm:flex px-3.5 py-1.5 bg-white hover:bg-gray-100 text-black font-bold rounded-xl text-xs sm:text-sm items-center gap-1 transition-colors cursor-pointer'>
                        Sign Up <HiArrowUpRight strokeWidth={1} />
                    </button>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={() => setMobileMenu(prev => !prev)}
                        className='md:hidden p-1.5 text-gray-300 hover:text-white focus:outline-none'
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenu ? <HiXMark size={24} /> : <HiBars3 size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenu && (
                <div className='md:hidden bg-[#111111]/95 backdrop-blur-lg border-b border-white/10 px-4 py-5 flex flex-col gap-4 text-sm font-semibold'>
                    <Link
                        to="/"
                        onClick={() => setMobileMenu(false)}
                        className='py-2 px-3 rounded-lg hover:bg-white/10 transition-colors'
                    >
                        Home
                    </Link>
                    <button className='text-left py-2 px-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer'>
                        Features
                    </button>
                    <button className='text-left py-2 px-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer'>
                        Pricing
                    </button>
                    <button className='text-left py-2 px-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer'>
                        Blog
                    </button>
                    <div className='pt-2 border-t border-white/10 flex sm:hidden'>
                        <button className='w-full py-2 bg-white text-black font-bold rounded-xl text-sm flex items-center justify-center gap-1 cursor-pointer'>
                            Sign Up <HiArrowUpRight strokeWidth={1} />
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar