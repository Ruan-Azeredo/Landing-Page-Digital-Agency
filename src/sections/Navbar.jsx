import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    var transition
    nav ? transition = 'left-0' :  transition = 'left-[-100%]'

    return (
        <div className='px-6 md:px-40 text-black-low'>
            <div>
                
            </div>
            <div className='flex py-12 justify-between'>

                <h1 className='font-bold text-base md:uppercase'>Digital Agency</h1>

                <button className='md:hidden' onClick={handleNav}>
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
                </button>
                
                <ul className='hidden md:flex gap-10 text-lg'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Testimonials</li>
                    <li>Contact</li>
                </ul>

                <ul className={`absolute top-0 bg-gray-low w-[60%] h-full border-r border-gray-high ease-in-out duration-500 ${transition}`}>
                    <li className='p-4 border-b border-gray-high'>Home</li>
                    <li className='p-4 border-b border-gray-high'>About</li>
                    <li className='p-4 border-b border-gray-high'>Testimonials</li>
                    <li className='p-4 border-b border-gray-high'>Contact</li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar