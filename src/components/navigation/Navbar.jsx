'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      id='navbar'
      className={`top-0; fixed z-10 w-full transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a] shadow-lg' : 'bg-transparent'
      }`}
    >
      <ul className='my-4 flex flex-row items-center justify-center gap-x-2 md:gap-x-6'>
        <li>
          <a
            href='#home'
            className="relative text-lg text-[#ededed] transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#ededed] after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href='#solutions'
            className="relative text-lg text-[#ededed] transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#ededed] after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
          >
            Solutions
          </a>
        </li>
        <li>
          <a
            href='#projects'
            className="relative text-lg text-[#ededed] transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#ededed] after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href='#contact'
            className="relative text-lg text-[#ededed] transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#ededed] after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
