import React from 'react';

const Navbar = () => {
    return (
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-2xl px-3 sm:px-4 py-2 sm:py-3 flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm fixed top-4 z-50 w-full max-w-[90%] sm:max-w-2xl mx-auto">
            {["about", "expertise", "samples", "testimonials", "contact"].map(section => (
                <a key={section} href={`#${section}`}>
                    <h2 className="cursor-pointer hover:scale-105 transition duration-200">
                        {section.toUpperCase().replace('_', ' ')}
                    </h2>
                </a>
            ))}
        </div>
    );
};

export default Navbar;