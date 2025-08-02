import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0f0f0f] w-screen text-white py-6 px-4 sm:px-10 mt-10">
            <div className="max-w-screen mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Branding */}
                <div className="text-center sm:text-left">
                    <h2 className="text-xl font-semibold">Varun Dhyani</h2>
                    <p className="text-xs text-gray-400">© {new Date().getFullYear()} All rights reserved</p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-6">
                    <a
                        href="https://www.instagram.com/iblameae_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-pink-400 transition"
                    >
                        <Instagram size={18} />
                        <span className="text-sm hidden sm:inline">Instagram</span>
                    </a>

                    <a
                        href="mailto:iblameae.work@gmail.com"
                        className="flex items-center gap-2 hover:text-blue-400 transition"
                    >
                        <Mail size={18} />
                        <span className="text-sm hidden sm:inline">Email</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
