import React from 'react'

const Expertise = () => {
    return (
        <div className='w-full max-w-[1500px] mt-25 px-4'>
            <h2 className='text-2xl font-semibold mb-4 text-center'>EXPERTISE</h2>

            {/* Responsive flex: column on small screens, row on md+ */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
                {/* Software Section */}
                <div className='bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-2xl p-6 w-fit cursor-pointer'>
                    <h2 className='font-semibold mb-2'>SOFTWARES:</h2>
                    <div className='grid grid-cols-2 gap-4'>
                        <img className='h-20 sm:h-24 md:h-28' src="after-effects.png" alt="" />
                        <img className='h-20 sm:h-24 md:h-28' src="premiere-pro.png" alt="" />
                        <img className='h-20 sm:h-24 md:h-28' src="photoshop.png" alt="" />
                        <img className='h-20 sm:h-24 md:h-28' src="figma.png" alt="" />
                    </div>
                </div>

                {/* Services Section */}
                <div className='w-full md:w-70 rounded-2xl'>
                    <h2 className='font-semibold mb-2'>SERVICES:</h2>
                    <div className='w-full grid grid-cols-1 gap-4'>
                        <div className='bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-2xl p-6 w-80 md:w-80  cursor-pointer'>
                            <h2 className='text-2xl font-semibold'>VIDEO EDITING</h2>
                            <p className='text-sm'><i>Long form, Short form, Corporate, Motion-Graphic, advertisements</i></p>
                        </div>
                        <div className='bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-2xl p-6 w-full md:w-80 cursor-pointer'>
                            <h2 className='text-2xl font-semibold'>GRAPHIC DESIGN</h2>
                            <p className='text-sm'><i>Youtube thumbnails, Posters, Advertisement</i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expertise
