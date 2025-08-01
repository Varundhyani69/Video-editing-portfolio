import React from 'react';

const Navbar = () => {
    return (
        <div id='#nav' className="bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-2xl p-6 w-150 flex items-center justify-center gap-4 h-15 text-sm fixed top-4 z-50">
            <a href="#about">
                <h2 className='cursor-pointer hover:scale-105 transition duration-200'>ABOUT ME</h2>
            </a>
            <a href="#expertise">
                <h2 className='cursor-pointer hover:scale-105 transition duration-200'>EXPERTISE</h2>
            </a>
            <a href="#samples">
                <h2 className='cursor-pointer hover:scale-105 transition duration-200'>SAMPLES</h2>
            </a>
            <a href="#testimonials">
                <h2 className='cursor-pointer hover:scale-105 transition duration-200'>TESTIMONIALS</h2>
            </a>
            <a href="#contact">
                <h2 className='cursor-pointer hover:scale-105 transition duration-200'>CONTACT ME</h2>
            </a>
        </div>
    );
};

export default Navbar;
