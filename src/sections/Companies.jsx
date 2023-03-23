import React from 'react'

const Companies = () => {
    return (
        <div className='px-6 md:px-40 grid'>
            <div className='mx-auto mt-24 font-light text-sm md:text-base text-[#667085]'>Trusted by 4,000+ companies</div>
            <div className='bg-[#F6F6F6] w-full mt-4 rounded-lg flex py-6 px-4 md:px-6 justify-between'>
                <img src="logo-spotfy.png" alt="" className='md:h-full h-[50%]'/>
                <img src="logo-slack.png" alt="" className='md:h-full h-[50%]'/>
                <img src="logo-dropbox.png" alt="" className='md:h-full h-[50%]'/>
                <img src="logo-zoom.png" alt="" className='md:h-full h-[50%]'/>
            </div>
        </div>
    )
}

export default Companies