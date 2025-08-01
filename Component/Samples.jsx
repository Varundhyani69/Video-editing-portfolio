import React from 'react'
import ReelsSample from './ReelsSample.jsx';
import LongSamples from './LongSamples.jsx';
const Samples = () => {
    return (
        <div className='mt-20 w-150'>
            <h2 className='text-2xl font-semibold'>SAMPLES</h2>
            <div className=' flex items-center justify-center'>
                <ReelsSample />
            </div>
            <div className='flex items-center justify-center'>
                <LongSamples />
            </div>
        </div>
    )
}

export default Samples
