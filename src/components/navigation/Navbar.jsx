"use client"

import { useEffect, useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
      <nav id="navbar" className={`fixed top-0; w-full z-10 transition-all duration-300 ${
          scrolled ? 'bg-[#0a0a0a] shadow-lg' : 'bg-transparent'
      }`}>
        <ul className="flex flex-row justify-center items-center space-x-2 md:space-x-6 my-4">
          <li>
            <a href="#home" className="relative text-lg text-[#ededed] transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:h-[2px] after:w-0 after:bg-[#ededed] after:transition-all after:duration-300 hover:after:w-full">
              Home
            </a>
          </li>
          <li>
            <a href="#solutions" className="relative text-lg text-[#ededed] transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:h-[2px] after:w-0 after:bg-[#ededed] after:transition-all after:duration-300 hover:after:w-full">
              Solutions
            </a>
          </li>
          <li>
            <a href="#projects" className="relative text-lg text-[#ededed] transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:h-[2px] after:w-0 after:bg-[#ededed] after:transition-all after:duration-300 hover:after:w-full">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="relative text-lg text-[#ededed] transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:h-[2px] after:w-0 after:bg-[#ededed] after:transition-all after:duration-300 hover:after:w-full">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );

    
  }