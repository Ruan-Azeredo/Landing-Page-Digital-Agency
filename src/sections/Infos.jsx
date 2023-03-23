import React from 'react'

const Infos = () => {
    return (
        <div className='px-6 md:px-40 mt-20'>
            <div className='md:flex md:flex-row-reverse md:justify-between'>
                <div className='md:ml-20'>
                    <div className='font-bold text-3xl md:text-[48px] text-black-medium text-center md:text-left md:leading-none mt-20'>Branding & Design System</div>
                    <div className='mt-6 font-normal text-black-medium text-center md:text-left text-sm md:text-lg mx-1 md:w-4/5'>
                        Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups.
                    </div>
                </div>
                <img src="img-pencil.png" alt="" className='mt-12'/>
            </div>
            <div className='md:flex md:flex-row md:justify-between'>
                <div className='md:mr-20'>
                    <div className='font-bold text-3xl md:text-[48px] text-black-medium text-center md:text-left md:leading-none mt-20'>Custome & Plugin Development</div>
                    <div className='mt-6 font-normal text-black-medium text-center md:text-left text-sm md:text-lg mx-1 md:w-4/5'>
                        Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups.
                    </div>
                </div>
                <img src="img-graph.png" alt="" className='mt-12'/>
            </div>
        </div>
    )
}

export default Infos