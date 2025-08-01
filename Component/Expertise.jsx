import React from 'react'

const Expertise = () => {
    return (
        <div className='w-150 mt-25 flex-col'>
            <h2 className='text-2xl font-semibold mb-2'>EXPERTISE</h2>
            <div className='flex items-center justify-center gap-8'>
                <div className='bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-2xl p-6 w-fit  cursor-pointer '>
                    <h2 className='font-semibold mb-2'>SOFTWARES:</h2>
                    <div className='grid grid-cols-2  gap-4'>
                        <img className='h-28' src="after-effects.png" alt="" />
                        <img className='h-28' src="premiere-pro.png" alt="" />
                        <img className='h-28' src="photoshop.png" alt="" />
                        <img className='h-28' src="figma.png" alt="" />
                    </div>
                </div>
                <div className=' w-70 rounded-2xl'>
                    <h2 className='font-semibold mb-2'>SERVICES:</h2>
                    <div className=' h-73 w-full grid grid-cols-1'>
                        <div className='bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-2xl p-6 h-fit w-80  cursor-pointer '>
                            <h2 className='text-2xl font-semibold'>VIDEO EDITING</h2>
                            <p className='text-sm'><i>Long form, Short form, Corporate, Motion-Graphic, advertisements</i></p>
                        </div>
                        <div className='bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-2xl p-6 h-fit w-80  cursor-pointer '>
                            <h2 className='text-2xl font-semibold'>GRAPHIC DESIGN</h2>
                            <p className='text-sm'><i>Youtube thumbnails, Posters, Advertisment</i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expertise
