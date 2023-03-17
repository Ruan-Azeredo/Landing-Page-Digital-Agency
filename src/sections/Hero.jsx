import React from 'react'

const Hero = () => {
    return (
        <div className='px-6 md:px-40 text-black-low md:flex'>
            <div className='md:mt-10'>
                <h1 className='font-bold text-4xl md:text-[64px] text-center md:text-left md:leading-none'>
                    Building Digital Products, Brands & Experience
                </h1>
                <p className='font-regular text-center mt-6 flex mx-auto md:mx-0 md:text-left w-3/4'>
                    Digital Agency is your online team mangement tool that Easy and Prompt
                </p>
                <button className='px-4 py-2 bg-blue-medium font-semibold text-gray-low text-sm rounded-md flex mx-auto md:mx-0 mt-6'>CONTACT US</button>
            </div>
            <img src="img-hero.png" alt="" className='mt-6 md:mt-0 w-1/2'/>
        </div>
    )
}

export default Hero