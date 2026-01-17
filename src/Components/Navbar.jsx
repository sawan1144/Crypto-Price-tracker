import React, { useState } from 'react'
import { HiArrowUpRight, HiChevronDown } from 'react-icons/hi2'

const Navbar = () => {
    const [show, setShow] = useState(false)

    function clickHandler(){
        setShow((p)=>!p)
    }

    return (
        <div className='sticky top-0 z-50 backdrop-blur-lg bg-gray-500/25'>
            <div className='flex justify-between items-center py-5 px-25'>
                <img src="/imgs/logo.png" alt="Logo" className='h-10' />
                <div className='flex gap-10 cursor-pointer'>
                    <button>Home</button>
                    <button>Features</button>
                    <button>Pricing</button>
                    <button>Blog</button>
                </div>
                <div className='flex items-center gap-8'>
                    <div>
                        <button className='flex items-center gap-1 border-2 px-2 py-1 rounded-xl' onClick={clickHandler}>USD <HiChevronDown /></button>
                        {show && <div className='absolute top-15 bg-white text-black py-3 rounded-lg transition ease-in duration-200'>
                            <div className='px-3 hover:bg-gray-500 cursor-pointer'>USD</div>
                            <div className='px-3 hover:bg-gray-500 cursor-pointer'>INR</div>
                            <div className='px-3 hover:bg-gray-500 cursor-pointer'>EUR</div>
                        </div>}
                    </div>
                    <div className='px-3 py-2 bg-white text-black font-bold rounded-xl text-sm flex items-center gap-1'>
                        Sign Up <HiArrowUpRight strokeWidth={1} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar