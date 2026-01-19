import React from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg-[#0a0a0a] text-white py-8 px-25 border-t border-gray-400'>
            <div className='flex justify-between'>
                    <div className='flex flex-col gap-3'>
                        <h4 className='text-gray-400 text-sm mb-2'>CoinTracker</h4>
                        <a className='text-sm hover:text-gray-300'>How it works</a>
                        <a className='text-sm hover:text-gray-300'>Pricing</a>
                        <a className='text-sm hover:text-gray-300'>Full service</a>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h4 className='text-gray-400 text-sm mb-2'>Resources</h4>
                        <a className='text-sm hover:text-gray-300'>Crypto prices</a>
                        <a className='text-sm hover:text-gray-300'>Crypto wallet lookup</a>
                        <a className='text-sm hover:text-gray-300'>Blog</a>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h4 className='text-gray-400 text-sm mb-2'>Company</h4>
                        <a className='text-sm hover:text-gray-300'>About</a>
                        <a className='text-sm hover:text-gray-300'>Brand</a>
                        <a className='text-sm hover:text-gray-300 flex items-center gap-2'>Careers</a>
                    </div>
                <div className='flex flex-col gap-3 max-w-xs'>
                    <h3 className='text-2xl font-semibold'>Download our app</h3>
                    <button className='flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-800 w-fit'>
                        <FaApple size={20} />
                        <span className='text-sm'>App store</span>
                    </button>
                    <button className='flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-800 w-fit'>
                        <FaGooglePlay size={18} />
                        <span className='text-sm'>Play store</span>
                    </button>
                </div>
            </div>
            <div className='text-[15vw] text-center font-bold transform scale-y-108'>CoinTracker</div>
            <div className='text-center text-sm border-t border-gray-400 p-2'>Copyright @ 2026, Cryptoplace - All Right Reserved.</div>
        </footer>
    )
}

export default Footer