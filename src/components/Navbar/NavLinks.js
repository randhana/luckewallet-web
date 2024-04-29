import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900 rounded-t hover:scale-[1.15] transition duration-1000 ease-in-out" smooth to="/#top" >
                Home
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900 rounded-t hover:scale-[1.15] transition duration-1000 ease-in-out" smooth to="/#about">
                About Us
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900 rounded-t hover:scale-[1.15] transition duration-1000 ease-in-out" smooth to="/feature#">
                Features
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900 rounded-t hover:scale-[1.15] transition duration-1000 ease-in-out" smooth to="/#faq">
                FAQ
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900 rounded-t hover:scale-[1.15] transition duration-1000 ease-in-out" to="/contact#contact">
                Contact Us
            </HashLink>
            
        </>
    )
}

export default NavLinks;
