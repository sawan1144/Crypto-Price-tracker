import React from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg-[#0a0a0a] text-white border-t border-gray-800 overflow-hidden'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-10'>
                    <div className='flex flex-col gap-3'>
                        <h4 className='text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1'>CoinTracker</h4>
                        <a href="#how-it-works" className='text-xs sm:text-sm text-gray-300 hover:text-white transition-colors cursor-pointer'>How it works</a>
                        <a href="#pricing" className='text-xs sm:text-sm text-gray-300 hover:text-white transition-colors cursor-pointer'>Pricing</a>
                        <a href="#full-service" className='text-xs sm:text-sm text-gray-300 hover:text-white transition-colors cursor-pointer'>Full service</a>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h4 className='text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1'>Resources</h4>
                        <a href="#prices" className='text-xs sm:text-sm text-gray-300 hover:text-white transition-colors cursor-pointer'>Crypto prices</a>
                        <a href="#wallet" className='text-xs sm:text-sm text-gray-300 hover:text-white transition-colors cursor-pointer'>Wallet lookup</a>
                        <a href="#blog" className='text-xs sm:text-sm text-gray-300 hover:text-white transition-colors cursor-pointer'>Blog</a>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h4 className='text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1'>Company</h4>
                        <a href="#about" className='text-xs sm:text-sm text-gray-300 hover:text-white transition-colors cursor-pointer'>About</a>
                        <a href="#brand" className='text-xs sm:text-sm text-gray-300 hover:text-white transition-colors cursor-pointer'>Brand</a>
                        <a href="#careers" className='text-xs sm:text-sm text-gray-300 hover:text-white transition-colors cursor-pointer'>Careers</a>
                    </div>

                    <div className='col-span-2 sm:col-span-1 md:col-span-1 flex flex-col gap-3'>
                        <h3 className='text-base sm:text-lg font-semibold text-white'>Download our app</h3>
                        <div className="flex sm:flex-col flex-row flex-wrap gap-2.5">
                            <button className='flex items-center gap-2 border border-gray-700 bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-xl text-xs sm:text-sm transition-colors cursor-pointer'>
                                <FaApple size={18} />
                                <span>App store</span>
                            </button>
                            <button className='flex items-center gap-2 border border-gray-700 bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-xl text-xs sm:text-sm transition-colors cursor-pointer'>
                                <FaGooglePlay size={16} />
                                <span>Play store</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scalable Watermark */}
                <div className='text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-center font-black tracking-tight text-white select-none py-4 sm:py-6 uppercase'>
                    CoinTracker
                </div>

                {/* Copyright */}
                <div className='text-center text-xs sm:text-sm text-gray-500 border-t border-gray-800/80 pt-6 mt-4'>
                    Copyright © 2026, Cryptoplace - All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer